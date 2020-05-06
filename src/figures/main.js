import { Point } from "./Point";
import { FigureFactory } from "./FigureFactory";

const paramsCircle = [new Point(0, 0), 3];
const paramsTriangle = [new Point(0, 0), new Point(0, 1), new Point(1, 0)];
const paramsQuadrangle = [new Point(0, 0), new Point(0, 1), new Point(1, 1), new Point(1, 0)];

const factory = new FigureFactory();

const circle = factory.create(paramsCircle);
const triangle = factory.create(paramsTriangle);
const quadrangle = factory.create(paramsQuadrangle);

console.log(circle.getType());
console.log(triangle.getType());
console.log(triangle.getPerimeter());
console.log(triangle.getSquare());
console.log(quadrangle.getType());