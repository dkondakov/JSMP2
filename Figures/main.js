import { FigureFactory } from "./FigureFactory";

paramsCircle = [new Point(0, 0), 3];
paramsTriangle = [new Point(0, 0), new Point(0, 1), new Point(1, 0)];
paramsTriangle = [new Point(0, 0), new Point(0, 1), new Point(1, 1), new Point(1, 0)];

const f = FigureFactory.create(paramsCircle);

console.log(f.getType());