import { Triangle } from './Triangle';

export class EquilateralTriangle extends Triangle {
    constructor(points) {
        super();
     
        this.type = 'Equilateral triangle';
        this.points = points;
    }   
}