import { Image } from "./Image.js";
import { MovementDots } from "./MovementDots.js";

function CarouselComponent(imagesArray) {
  if (!(this instanceof CarouselComponent)) {
    return new CarouselComponent(imagesArray);
  }
  this.imagesArray = imagesArray;
  this.imgArray = [];
  this.activeSlide = 1;
  this.mode = null;
  this.intervalId = null;
}

CarouselComponent.modes = {
  MANUAL: "manual",
  AUTOMATIC: "automatic",
  BOTH: "both"
};

Object.assign(CarouselComponent.prototype, {
  init: function(node) {
    //iterate and construct models
    let defaultMode = CarouselComponent.modes.BOTH;
    let imgArray = this.imgArray;
    $.each(this.imagesArray["carousel"], function(index, value) {
      imgArray[index] = new Image(value);
    });
    this.mode = defaultMode;
    this.renderElements(node, imgArray);
  },

  renderElements: function(wrapper, array) {
    //binder
    let currentSlideCallback = this.currentSlide.bind(this);
    //add dots + images
    let dotsWrapper = document.createElement("div");
    dotsWrapper.style.textAlign = "center";
    dotsWrapper.classList.add("dots-wrapper");

    $.each(array, function(index, value) {
      let image = value.render(index);
      $(wrapper).append(image);
      //add dots
      let dot = new MovementDots(index, currentSlideCallback);
      let dotElement = dot.render();
      $(dotsWrapper).append(dotElement);
    });

    $(wrapper).append(dotsWrapper);
    this.currentSlide(this.activeSlide);
  },
  nextSlides: function() {
    this.activeSlide += 1;
    this.showSlides();
  },
  currentSlide: function(n) {
    this.activeSlide = n;
    this.showSlides();
  },

  showSlides: function() {
    let currentSlide = this.activeSlide;
    var i;
    var slides = document.getElementsByClassName("container");
    var dots = document.getElementsByClassName("dot");
    if (currentSlide > slides.length) {
      this.activeSlide = 1;
    }
    if (currentSlide < 1) {
      this.activeSlide = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].style.opacity = "0";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.activeSlide - 1].style.display = "block";
    slides[this.activeSlide - 1].style.opacity = "1";
    dots[this.activeSlide - 1].className += " active";
  }
});

export { CarouselComponent };
