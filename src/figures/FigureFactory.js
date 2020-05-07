import { Circle } from "./Circle";
import { IsoscelesTriangle } from "./Triangles/IsoscelesTriangle";
import { Square } from "./Quadrangles/Square";
import { Triangle } from "./Triangles/Triangle";
import { EquilateralTriangle } from "./Triangles/EquilateralTriangle";
import { RightTrianlge } from "./Triangles/RightTriangle"

export class FigureFactory {
    create(args) {
        switch (args.length) {
            case 2:
                return new Circle(args);
            case 3:
                const triangle = new Triangle(args);

                switch (triangle.getTypeBySides()) {
                    case 'Isosceles':
                        return new IsoscelesTriangle(args);
                    case 'Equilateral':
                        return new EquilateralTriangle(args);
                    case 'Right':
                        return new RightTrianlge(args);
                    default:
                        return triangle;
                };
            case 4:
                return new Square(args);
            default:
                throw new Error('Incorrect amount of arguments!');
        };
    }
}