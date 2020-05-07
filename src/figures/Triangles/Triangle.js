import { Figure } from '../Figure';
import Measurements from '../Measurements';

export class Triangle extends Figure {
    constructor(points) {
        super();

        this.type = 'Unknown triangle';
        this.points = points;
    }   
        
    getTypeBySides() {
        const sides = this._getSides().sort((a, b) => a - b);

        if (parseFloat((sides[0]**2 + sides[1]**2).toFixed(1)) === parseFloat((sides[2]**2).toFixed(1)))
            return 'Right';
        if (sides[0] === sides[1] || sides[1] === sides[2] || sides[0] === sides[2])
            if (sides[0] === sides[1] && sides[1] === sides[2] && sides[0] === sides[2])
                return 'Equilateral';
            else
                return 'Isosceles';
        return this.type;
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

        return parseFloat(Math.sqrt(halfPerimeter*(halfPerimeter - sides[0])*(halfPerimeter - sides[1])*(halfPerimeter - sides[2])).toFixed(1));
    }
}