import {Figure} from '../Figure';

export class Quadrangle extends Figure {
    constructor(p1, p2, p3, p4) {
        super();
             
        this.points = [p1, p2, p3, p4];
    }   
   
    getPerimeter() {
        return Measurements.getDistance(points[0], points[1]) +
                Measurements.getDistance(points[1], points[2]) +
                Measurements.getDistance(points[2], points[3]) +
                Measurements.getDistance(points[0], points[3]);
    }

    getSquare() {
        return;
    }
}