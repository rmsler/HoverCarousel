function MovementDots(label, showSlideCallback) {
  if (!(this instanceof MovementDots)) {
    return new MovementDots(imagesArray);
  }
  this.label = label;
  this.showSlideCallback = showSlideCallback;
}

Object.assign(MovementDots.prototype, {
  render: function() {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    let textchild = document.createTextNode(this.label+1);
    dot.appendChild(textchild);
    dot.addEventListener("mouseover", this.showSlide.bind(this));
    return dot;
  },
  showSlide: function() {
    this.showSlideCallback(this.label + 1);
  }
});

export { MovementDots };
