class Point {
    readonly x: number;
    readonly y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    get getCoordinates() {
        return `X-axis: ${this.x}, Y-axis: ${this.y}`
    }
}

const point = new Point(10, 25);
console.log(point.getCoordinates);