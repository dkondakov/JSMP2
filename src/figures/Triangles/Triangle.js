import { Figure } from '../Figure';
import { Measurements } from '../Measurements';

export class Triangle extends Figure {
    constructor() {
        super();

        this.type = 'Triangle';
    }   
   
    getPerimeter() {
        return Measurements.getDistance(points[0], points[1]) + Measurements.getDistance(points[1], points[2]) + Measurements.getDistance(points[0], points[2]);
    }

    getSquare() {
        return;
    }
}