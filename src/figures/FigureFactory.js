import { Circle } from "./Circle";
import { IsoscelesTriangle } from "./Triangles/IsoscelesTriangle";
import { Rectangle } from "./Quadrangles/Rectangle";
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

                switch (triangle.getType()){
                    case 'Isosceles':
                        return new IsoscelesTriangle(args);
                    case 'Equilateral':
                        return new EquilateralTriangle(args);
                    default:
                        return new RightTrianlge(args);
                }
                
            case 4:
                return new Rectangle(args);
            default:
                throw new Error('Incorrect amount of arguments!');
        }
    }
}