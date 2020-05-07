import {Quadrangle} from './Quadrangle';
import Measurements from '../Measurements';

export class Square extends Quadrangle {
    constructor(points) {
        super();
     
        this.type = 'Square';
        this.points = points;
    }   

    getSquare() {
        return Measurements.getDistance(this.points[0], this.points[1])**2;
    }
}