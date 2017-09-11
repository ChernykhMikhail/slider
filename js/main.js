var prevSlideBtn = document.querySelector('.prev-slide'),
    nextSlideBtn = document.querySelector('.next-slide'),
    slides = document.querySelectorAll('.slider > img'),
    dots = document.querySelectorAll('ul li'),
    autoplay = document.querySelector('#auto-play'),
    currentSlide = 0,
    intervalId;


var nextSlide = function(){
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('current-rect');
    currentSlide != slides.length-1 ? currentSlide++ : currentSlide = 0;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('current-rect');
}

var previousSlide = function(){
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('current-rect');
    currentSlide != 0 ? currentSlide-- : currentSlide = slides.length-1;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('current-rect');
};

var showSlide = function(slideNumber){
    return function(){
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('current-rect');
        slides[slideNumber].classList.add('active');
        dots[slideNumber].classList.add('current-rect');
        currentSlide = slideNumber;
    }
};

var autoPlay = function(event){
    if (this.checked == true) {
        intervalId = setInterval(() => nextSlide(), 5000);
    } else {
        clearInterval(intervalId);
    }
};

nextSlideBtn.addEventListener('click', nextSlide);
prevSlideBtn.addEventListener('click', previousSlide);

for(let i = 0; i < dots.length; i++){
    dots[i].addEventListener('click', showSlide(i));
}

autoplay.addEventListener('change', autoPlay);
