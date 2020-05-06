import { Triangle } from './Triangle';

export class RightTriangle extends Triangle {
    constructor(points) {
        super();
     
        this.type = 'Right triangle';
        this.points = points;
    }   
}