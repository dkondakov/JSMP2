import { Figure } from '../Figure';
import { Measurements } from '../Measurements';

export class Triangle extends Figure {
    constructor(p1, p2, p3) {
        super();
    }   
   
    getPerimeter() {
        return Measurements.getDistance(p1, p2) + Measurements.getDistance(p2, p3) + Measurements.getDistance(p1, p3);
    }

    getSquare() {
        return;
    }
}