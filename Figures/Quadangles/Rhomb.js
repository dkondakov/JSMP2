import {Quadrangle} from './Quadrangle';

export class Rhomb extends Quadrangle {
    constructor(points) {
        super();
     
        this.type = 'Rhomb';
        this.points = points;
    }   
   
    getPerimeter() {
        return;
    }

    getSquare() {
        return;
    }
}