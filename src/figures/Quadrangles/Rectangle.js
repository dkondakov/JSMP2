import {Quadrangle} from './Quadrangle';
import Measurements from '../Measurements';

export class Rectangle extends Quadrangle {
    constructor(points) {
        super();
     
        this.type = 'Rectangle';
        this.points = points;
    }   
}