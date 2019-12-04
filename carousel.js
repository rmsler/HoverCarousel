import { CarouselComponent } from "./modules/CarouselComponent.js";

var carousel = new Object();

$.getJSON("config.json", function(data) {
  carousel = new CarouselComponent(data);
  carousel.init(".carrousel-wrapper");
});
