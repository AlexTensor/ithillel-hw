import {Slider} from "./Slider.js";

const myFistSliderImages = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
]

new Slider({
    images: myFistSliderImages,
    pauseInterval: 3,
    width: 640,
    height: 360,
    animationSpeed: 2,
    sliderId: 'myFistSlider',
});


new Slider({
    images: myFistSliderImages,
    width: 854,
    height: 480,
    animationSpeed: 0,
    sliderId: 'myFistSlider2',
});
