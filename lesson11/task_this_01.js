'use strict';
// Первая задача на this:

const rectangle = {
  width: 5,
  height: 5,
  get rectanglArea() {
    return `${this.width * this.height}см`;
  },
  get rectanglPerimeter() {
    return `${(this.width + this.height) * 2}см`;
  },
  set rectanglArea(value) {
    this.width = value;
    this.height = value;
  },
  set rectanglPerimeter(value) {
    this.width = value;
    this.height = value;
  },
};

console.log(`Площадь прямоугольника: ${rectangle.rectanglArea}`);
console.log(`Периметр прямоугольника: ${rectangle.rectanglPerimeter}`);


