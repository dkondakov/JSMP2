import { Triangle } from './Triangle';

export class IsoscelesTriangle extends Triangle {
    constructor(points) {
        super();
     
        this.type = 'Isosceles triangle';
        this.points = points;
    }   
}