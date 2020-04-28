import {Quadrangle} from './Quadrangle';

export class Rectangle extends Quadrangle {
    constructor(points) {
        super();
     
        this.type = 'Rectangle';
        this.points = points;
    }   
   
    getPerimeter() {
        return;
    }

    getSquare() {
        return;
    }
}