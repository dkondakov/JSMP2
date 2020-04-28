import { Triangle } from './Triangle';

export class IsoscelesTriangle extends Triangle {
    constructor() {
        super();
     
        this.type = 'Isosceles triangle';
    }   

    getSquare() {
        return;
    }
}