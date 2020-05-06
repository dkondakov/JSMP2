export class Measurements {
    
    /**
     * @param {Point} p1 
     * @param {Point} p2 
     * @returns {number}
     */
    getDistance(p1, p2) {
        return Math.sqrt((p2.x - p1.x)**2 + (p2.y - p1.y)**2);
    }
}