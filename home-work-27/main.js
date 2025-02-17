
setSliderParams();
createSliderBtns();
let currentSlider = 0;

const arrowBtnElements = document.querySelectorAll('.slider__navigation > .btn');
[...arrowBtnElements].forEach((btn) => btn.addEventListener('click', arrowBtnEvent));

const playBtnElement = document.querySelector('.play-pause-btn');
playBtnElement.addEventListener('click', playPauseEvent);

const slideBySlideBtnElements = document.querySelectorAll('.slideBySlide-btn > div');
[...slideBySlideBtnElements].forEach((btn) => btn.addEventListener('click', slideBySlideEvent));

function slideBySlideEvent(event) {
    const btnElement = event.target;
    const slideBySlideBtnElements = document.querySelectorAll('.slideBySlide-btn > div');
    if(!btnElement.classList.contains('active')) {
        [...slideBySlideBtnElements].forEach((btnElement, index) => btnElement.classList.remove('active'));
        btnElement.classList.add('active');
        [...slideBySlideBtnElements].forEach((btnElement, index) =>{
            if(btnElement.classList.contains('active')) {
                currentSlider = index;
            }
        });
    }
}

function playPauseEvent(event) {
    const btnElement = event.target;
    if(btnElement.classList.contains('play')){
        btnElement.innerHTML = '&#10073;&#10073;';
        btnElement.classList.remove('play');
        btnElement.classList.add('pause');
    }else{
        btnElement.innerHTML = '&#9658;';
        btnElement.classList.remove('pause');
        btnElement.classList.add('play');
    }
}

function arrowBtnEvent(event) {
    if(event.target.classList.contains('right')) {
        console.log(2);
    }else{
        console.log(1);
    }
}


function setSliderParams(){
    const sliderElement = document.getElementById('slider');
    const sliderWidth = sliderElement.dataset.width;
    const sliderHeight = sliderElement.dataset.height;
    sliderElement.style.width = `${sliderWidth}px`;
    sliderElement.style.height = `${sliderHeight}px`;
    // const sliderContainer = document.getElementsByClassName('slider__container')[0];
    // sliderContainer.style.height = `${sliderHeight}px`;
}

function createSliderBtns(){
    const imagesCount = document.querySelectorAll('.slider__container > img').length;
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

