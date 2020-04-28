import {Quadrangle} from './Quadrangle';

export class Square extends Quadrangle {
    constructor(points) {
        super();
     
        this.type = 'Square';
        this.points = points;
    }   
   
    getPerimeter() {
        return;
    }

    getSquare() {
        return;
    }
}