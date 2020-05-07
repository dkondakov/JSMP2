import { Point } from "./Point";
import { FigureFactory } from "./FigureFactory";

const paramsCircle = [new Point(0, 0), 3];
const paramsQuadrangle = [new Point(0, 0), new Point(0, 1), new Point(1, 1), new Point(1, 0)];
// const paramsRightTriangle = [new Point(0, 0), new Point(0, 1), new Point(1, 0)];
const paramsIsoscelesTriangle = [new Point(0, 0), new Point(0, 1), new Point(1, 0.5)];
const paramsEquilateralTriangle = [new Point(-1, 0), new Point(1, 0), new Point(0, 1.73)];

const factory = new FigureFactory();

const circle = factory.create(paramsCircle);
const quadrangle = factory.create(paramsQuadrangle);
const triangle = factory.create(paramsIsoscelesTriangle);
// const triangle2 = factory.create(paramsRightTriangle);
const triangle3 = factory.create(paramsEquilateralTriangle);

console.log(circle.getType());
console.log(circle.getSquare());
console.log(circle.getPerimeter());
console.log('------');
console.log(quadrangle.getType());
console.log(quadrangle.getSquare());
console.log(quadrangle.getPerimeter());
console.log('------');
console.log(triangle.getType());
console.log(triangle.getSquare());
console.log(triangle.getPerimeter());
// console.log('------');
// console.log(triangle2.getType());
// console.log(triangle2.getSquare());
// console.log(triangle2.getPerimeter());
console.log('------');
console.log(triangle3.getType());
console.log(triangle3.getSquare());
console.log(triangle3.getPerimeter());