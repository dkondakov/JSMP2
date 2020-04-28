import {Figure} from './Figure';

export class Circle extends Figure {
    constructor(point, radius) {
        super();

        this.radius = radius;
        this.type = 'Circle';
        this.points = [point];
    }   
   
    getPerimeter() {
        return 2*Math.PI*this.radius;
    }

    getSquare() {
        return Math.PI*R**2;
    }
}