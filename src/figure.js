import {Point, FILLING} from "./point";

export class Figure{
    constructor(field, setOfPoints, fill = FILLING.FILL){
        this._field = field
        this._fill = fill
        this._points = setOfPoints
    }

    set points(points) {
        this._points = points
    }

    draw() {
        this._points.forEach( point => {
            new Point(this._field, point.x, point.y, this._fill).draw()
        })
    }
}
