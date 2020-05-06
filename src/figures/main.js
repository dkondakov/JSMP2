import { Point } from "./Point";
import { FigureFactory } from "./FigureFactory";

const paramsCircle = [new Point(0, 0), 3];
const paramsTriangle = [new Point(0, 0), new Point(0, 1), new Point(1, 0)];
const paramsQuadrange = [new Point(0, 0), new Point(0, 1), new Point(1, 1), new Point(1, 0)];

const fact = new FigureFactory();

const fig = fact.create(paramsCircle);

console.log(fig.getType());