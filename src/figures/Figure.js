export class Figure {
    constructor() {
        if(new.target === Figure)
            throw new TypeError ("Creating of a Figure class instance is prohibited!");
        this.type = 'Figure';
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