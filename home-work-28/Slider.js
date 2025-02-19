export class Slider {
    currentSlide = 0;
    intervalId = null;
    touchstartX = 0;
    touchendX = 0;
    isPlaying = false;
    constructor(params) {
        if(!Array.isArray(params.images) || !params.images.length || !params.width || !params.height || !params.sliderId) {
            throw new Error("Invalid parameters");
        }
        this.images = params.images;
        this.pauseInterval = params.pauseInterval;
        this.width = params.width;
        this.height = params.height;
        this.animationSpeed = params.animationSpeed;
        this.sliderId = params.sliderId;
        this.generateHTML();
        this.addEvents();
    }
    generateHTML(){
        const sliderMainContainer = document.querySelector(`#${this.sliderId}`);
        sliderMainContainer.classList.add('customslider');
        sliderMainContainer.style.height = `${this.height}px`;
        sliderMainContainer.style.width = `${this.width}px`;
        const sliderContainer = document.createElement('div');
        sliderContainer.classList.add('slider__container');
        const slideBySlideBtn = document.createElement('div');
        slideBySlideBtn.classList.add('slideBySlide-btn');
        this.images.forEach((image, index) => {
            const imageElement = document.createElement('img');
            imageElement.setAttribute('src', image);
            imageElement.setAttribute('alt', `${this.sliderId}_${index + 1}`);
            sliderContainer.appendChild(imageElement);
            const slideBtn = document.createElement('div');
            if(!index){
                slideBtn.classList.add('active');
            }
            slideBtn.dataset.slidenumber = index;
            slideBySlideBtn.appendChild(slideBtn);
        });
        sliderMainContainer.appendChild(sliderContainer);
        if(this.pauseInterval){
            const playBtn = document.createElement('div');
            playBtn.classList.add('play-pause-btn');
            playBtn.innerHTML = '&#9658;';
            sliderMainContainer.appendChild(playBtn);
        }
        const sliderNav = document.createElement('div');
        sliderNav.classList.add('slider__navigation');
        const leftBtn = document.createElement('div');
        leftBtn.classList.add('left');
        leftBtn.classList.add('btn');
        leftBtn.innerHTML = '&#8592;';
        sliderNav.appendChild(leftBtn);
        sliderNav.appendChild(slideBySlideBtn);
        const rightBtn = document.createElement('div');
        rightBtn.classList.add('right');
        rightBtn.classList.add('btn');
        rightBtn.innerHTML = '&#8594;';
        sliderNav.appendChild(rightBtn);
        sliderMainContainer.appendChild(sliderNav);
        if(this.animationSpeed){
            sliderContainer.style.transition = `transform ${this.animationSpeed}s`;
        }
    }
    addEvents(){
        const arrowBtnElements = document.querySelectorAll(`#${this.sliderId} .slider__navigation > .btn`);
        [...arrowBtnElements].forEach((btn) => btn.addEventListener('click', this.moveSliderEvent.bind(this)));
        if(this.pauseInterval){
            document.querySelector(`#${this.sliderId} .play-pause-btn`).addEventListener('click', this.playPauseEvent.bind(this));
        }
        const slideBySlideBtnElements = document.querySelectorAll(`#${this.sliderId} .slideBySlide-btn > div`);
        [...slideBySlideBtnElements].forEach((btn) => btn.addEventListener('click', this.slideBySlideEvent.bind(this)));

        const slider = document.querySelector(`#${this.sliderId}`);
        slider.addEventListener('touchstart', e => {
            this.touchstartX = e.changedTouches[0].screenX
        });
        slider.addEventListener('touchend', (event) => {
            this.touchendX = event.changedTouches[0].screenX;
            this.checkDirection(event);
        });
        document.addEventListener('keydown', this.moveSliderEvent.bind(this));
    }

    moveSliderEvent(event, action) {
        if (event instanceof TouchEvent) {
            if(action === 'left') {
                this.currentSlide += 1;
            }else if(action === 'right') {
                this.currentSlide -= 1;
            }
        }else if(event.target.classList.contains('right') || action === 'play' || event.code === 'ArrowRight') {
            this.currentSlide += 1;
        }else if(event.target.classList.contains('left') || event.code === 'ArrowLeft'){
            this.currentSlide -= 1;
        }
        if(this.currentSlide >= this.images.length){
            this.currentSlide = 0;
        }else if(this.currentSlide < 0){
            this.currentSlide = this.images.length - 1;
        }
        this.moveSlide(this.currentSlide);
        this.markDots();
    }
    moveSlide(currentSlide){
        const sliderContent = document.querySelector(`#${this.sliderId} .slider__container`);
        sliderContent.style.transform = `translateX(-${this.width * currentSlide}px)`;
    }
    markDots(){
        const slideBySlideBtnElements = document.querySelectorAll(`#${this.sliderId} .slideBySlide-btn > div`);
        [...slideBySlideBtnElements].forEach((btnElement) => btnElement.classList.remove('active'));
        [...slideBySlideBtnElements][this.currentSlide].classList.add('active');
    }

    playPauseEvent(event) {
        if (event instanceof TouchEvent) {
            return;
        }
        const btnElement = event.target;
        if(!this.isPlaying){
            btnElement.innerHTML = '&#10073;&#10073;';
            this.isPlaying = true;
            this.intervalId = setInterval(() => {
                this.moveSliderEvent(event, 'play');
            }, this.pauseInterval * 1000);
        }else{
            btnElement.innerHTML = '&#9658;';
            this.isPlaying = false;
            clearInterval(this.intervalId);
        }
    }
    slideBySlideEvent(event) {
        if (event instanceof TouchEvent) {
            return;
        }
        const btnElement = event.target;
        if(Number(btnElement.dataset.slidenumber) !== this.currentSlide) {
            this.currentSlide = Number(btnElement.dataset.slidenumber);
            this.moveSlide(this.currentSlide);
            this.markDots();
        }
    }
    checkDirection(event) {
        if (this.touchendX < this.touchstartX) {
            this.moveSliderEvent(event, 'left');
        }
        if (this.touchendX > this.touchstartX) {
            this.moveSliderEvent(event, 'right');
        }
    }
}