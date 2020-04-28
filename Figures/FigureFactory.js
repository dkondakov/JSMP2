import { Circle } from "./Circle";
import { IsoscelesTriangle } from "./Triangles/IsoscelesTriangle";
import { Rectangle } from "./Quadrangles/Rectangle";

export static class FigureFactory {
    static create(...args) {
        switch (args.length) {
            case 2:
                return new Circle(args);
            case 3:
                return new IsoscelesTriangle(args);
            case 4:
                return new Rectangle(args);
            default:
                throw new Error('Incorrect amount of arguments!');
        }
    }
}