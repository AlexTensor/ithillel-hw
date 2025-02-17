

let currentSlide = 0;
const imagesCount = document.querySelectorAll('.slider__container > img').length;
let interval = null;
let touchstartX = 0;
let touchendX = 0;
setSliderParams();
createSliderBtns();

const arrowBtnElements = document.querySelectorAll('.slider__navigation > .btn');
[...arrowBtnElements].forEach((btn) => btn.addEventListener('click', moveSliderEvent));

const playBtnElement = document.querySelector('.play-pause-btn');
playBtnElement.addEventListener('click', playPauseEvent);

const slideBySlideBtnElements = document.querySelectorAll('.slideBySlide-btn > div');
[...slideBySlideBtnElements].forEach((btn) => btn.addEventListener('click', slideBySlideEvent));

const sliderElement = document.getElementById('slider');
sliderElement.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
})
sliderElement.addEventListener('touchend', (event) => {
    touchendX = event.changedTouches[0].screenX;
    checkDirection(event);
});
document.addEventListener('keydown', moveSliderEvent);

function checkDirection(event) {
    if (touchendX < touchstartX) {
        moveSliderEvent(event, 'left');
    }
    if (touchendX > touchstartX) {
        moveSliderEvent(event, 'right');
    }
}

function slideBySlideEvent(event) {
    if (event instanceof TouchEvent) {
        return;
    }
    const btnElement = event.target;
    const slideBySlideBtnElements = document.querySelectorAll('.slideBySlide-btn > div');
    if(!btnElement.classList.contains('active')) {
        [...slideBySlideBtnElements].forEach((btnElement) => btnElement.classList.remove('active'));
        btnElement.classList.add('active');
        [...slideBySlideBtnElements].forEach((btnElement, index) =>{
            if(btnElement.classList.contains('active')) {
                currentSlide = index;
            }
        });
        moveSlide(currentSlide);
    }
}

function moveSlide(currentSlide){
    const sliderElement = document.getElementById('slider');
    const sliderWidth = sliderElement.dataset.width;
    const sliderContent = document.querySelector('.slider__container');
    sliderContent.style.transform = `translateX(-${sliderWidth * currentSlide}px)`;
}

function playPauseEvent(event) {
    if (event instanceof TouchEvent) {

    }
    const btnElement = event.target;
    if(btnElement.classList.contains('play')){
        btnElement.innerHTML = '&#10073;&#10073;';
        btnElement.classList.remove('play');
        btnElement.classList.add('pause');
        const intervalValue = document.getElementById('slider').dataset.interval;
        interval = setInterval(() => {
            moveSliderEvent(event, 'play');
        }, intervalValue * 1000);
    }else{
        btnElement.innerHTML = '&#9658;';
        btnElement.classList.remove('pause');
        btnElement.classList.add('play');
        clearInterval(interval);
    }
}

function moveSliderEvent(event, action) {

    if (event instanceof TouchEvent) {
        if(action === 'left') {
            currentSlide += 1;
        }else if(action === 'right') {
            currentSlide -= 1;
        }
    }else if(event.target.classList.contains('right') || action === 'play' || event.code === 'ArrowRight') {
        currentSlide += 1;
    }else if(event.target.classList.contains('left') || event.code === 'ArrowLeft'){
        currentSlide -= 1;
    }

    if(currentSlide >= imagesCount){
        currentSlide = 0;
    }else if(currentSlide < 0){
        currentSlide = imagesCount - 1;
    }

    moveSlide(currentSlide);
    markDots();
}

function markDots(){
    const slideBySlideBtnElements = document.querySelectorAll('.slideBySlide-btn > div');
    [...slideBySlideBtnElements].forEach((btnElement) => btnElement.classList.remove('active'));
    [...slideBySlideBtnElements][currentSlide].classList.add('active');
}

function setSliderParams(){
    const sliderElement = document.getElementById('slider');
    const sliderWidth = sliderElement.dataset.width;
    const sliderHeight = sliderElement.dataset.height;
    sliderElement.style.width = `${sliderWidth}px`;
    sliderElement.style.height = `${sliderHeight}px`;
}

function createSliderBtns(){

    let resultHTML = '';
    for(let i = 0; i < imagesCount; i++) {
        if(!i){
            resultHTML += '<div class="active"></div>'
        }
        else{
            resultHTML += '<div></div>'
        }
    }
    const slideBySlideContainer = document.getElementsByClassName('slideBySlide-btn')[0];
    slideBySlideContainer.innerHTML = resultHTML;
}

