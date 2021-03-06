import {Point, FILLING} from "./point";

export class Figure{
    constructor(field, fill = FILLING.FILL){
        this._field = field
        this._fill = fill
    }

    set points(points) {
        this._points = points
    }

    get points() {
        return this._points
    }

    draw() {
        this._points.forEach( point => {
            new Point(this._field, point.x, point.y, this._fill).draw()
        })
    }
}
