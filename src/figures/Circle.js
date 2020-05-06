import {Figure} from './Figure';

export class Circle extends Figure {
    /**
     * @param {...Point} points
     * @param {number} radius 
     */
    constructor(radius, ...points) {
        super();

        this.type = 'Circle';
        this.points = points;
        this.radius = radius;
    }   
   
    getPerimeter() {
        return 2*Math.PI*this.radius;
    }

    getSquare() {
        return Math.PI*R**2;
    }
}