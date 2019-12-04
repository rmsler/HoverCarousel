function Image(config) {
  if (!(this instanceof Image)) {
    return new Image(config);
  }
  this.name = config.Name;
  this.text = config.Text;
  this.location = config.Location;
  this.domReference = null;
}
Object.assign(Image.prototype, {
  render: function(labelNo) {
    let label = "image" + labelNo;
    //container element
    let domElement = document.createElement("div");
    domElement.classList.add("container");
    domElement.classList.add("slides");
    domElement.classList.add("fade");
    // image inside container
    let content = document.createElement("img");
    content.classList.add(this.name);
    content.classList.add(label);
    content.setAttribute("src", this.location);
    content.style.width = "100%";
    let textchild = document.createTextNode(this.name);
    content.appendChild(textchild);
    // text inside container
    let text = document.createElement("div");
    text.classList.add("text");
    let insideText = document.createTextNode(this.text);
    text.appendChild(insideText);
    $(domElement).append(content);
    $(domElement).append(text);
    this.domReference = domElement;
    return domElement;
  }
});
export { Image };
