import { Figure } from '../Figure';
import Measurements from '../Measurements';
import { Point } from '../Point';

export class Triangle extends Figure {
    constructor(points) {
        super();

        this.type = 'Unknown triangle';
        this.points = points;
    }   
        
    getType() {
        const sides = this._getSides();

        if (sides[0] === sides[1] || sides[1] === sides[2] || sides[0] === sides[2])
            if (sides[0] === sides[1] && sides[1] === sides[2] && sides[0] === sides[2])
                return 'Equilateral';
            else
                return 'Isosceles';
    }

    _getSides() {
        return [
            Measurements.getDistance(this.points[0], this.points[1]),
            Measurements.getDistance(this.points[1], this.points[2]),
            Measurements.getDistance(this.points[0], this.points[2])
        ]
    }
    
    getPerimeter() {
        const sides = this._getSides(this.points[0], this.points[1], this.points[2]);

        return sides.reduce((a, b) => a += b, 0);
    }

    getSquare() {
        const sides = this._getSides(this.points[0], this.points[1], this.points[2]);
        const halfPerimeter = this.getPerimeter()/2;

        return Math.sqrt(halfPerimeter*(halfPerimeter - sides[0])*(halfPerimeter - sides[1])*(halfPerimeter - sides[2]));
    }
}