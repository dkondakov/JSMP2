export class Figure {
    constructor(...points) {
        this.type = 'Figure';
        this.points = points;
    }

    getType() {
        return this.type;
    }

    getPerimeter() {
        return 0;
    }

    getSquare() {
        return 0;
    }
}