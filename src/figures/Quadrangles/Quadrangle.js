import { Figure } from '../Figure';
import Measurements from '../Measurements';

export class Quadrangle extends Figure {
    constructor(points) {
        super();
             
        this.type = 'Quadrangle';
        this.points = points;
    }   
   
    getPerimeter() {
        return Measurements.getDistance(this.points[0], this.points[1]) +
                Measurements.getDistance(this.points[1], this.points[2]) +
                Measurements.getDistance(this.points[2], this.points[3]) +
                Measurements.getDistance(this.points[0], this.points[3]);
    }
}