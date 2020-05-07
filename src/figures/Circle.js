import {Figure} from './Figure';

export class Circle extends Figure {
    constructor(args) {
        super();

        this.type = 'Circle';
        this.points = [args[0]];
        this.radius = [args[1]];
    }   
   
    getPerimeter() {
        return parseFloat((2*Math.PI*this.radius).toFixed(1));
    }

    getSquare() {
        return parseFloat((Math.PI*this.radius**2).toFixed(1));
    }
}