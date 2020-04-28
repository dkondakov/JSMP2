import { Figure } from '../Figure';
import { Measurements } from '../Measurements';

export class Triangle extends Figure {
    constructor(p1, p2, p3) {
        super();

        this.points = [p1, p2, p3];
    }   
   
    getPerimeter() {
        return Measurements.getDistance(points[0], points[1]) + Measurements.getDistance(points[1], points[2]) + Measurements.getDistance(points[0], points[2]);
    }

    getSquare() {
        return;
    }
}