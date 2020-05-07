import { Point } from "./Point";

export default class Measurements {
    
    /**
     * @param {Point} p1
     * @param {Point} p2
     * @returns {number}
     */
    static getDistance(p1, p2) {
        return parseFloat(Math.sqrt((p2.x - p1.x)**2 + (p2.y - p1.y)**2).toFixed(1));
    }
}