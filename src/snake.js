import { Point, FILLING} from "./point";
import { Figure } from "./figure";

const DIRECTION = {
    RIGHT: 'right',
    LEFT: 'left',
    UP: 'up',
    DOWN: 'down'
}

export class Snake extends Figure {
    constructor(field, setOfPoint) {
        super(field, setOfPoint)
        this._direction = DIRECTION.RIGHT
        this.draw()
    }

    _clearTail() {
        const {x, y} = this.points.shift()
        new Point(this._field, x, y, FILLING.EMPTY).draw()
    }

    _getHead() {
        return this.points[this.points.length - 1]
    }

    _checkHitSelf({x, y}){
        this.points.forEach(point => {
            if (point.x === x && point.y === y) return true
        })
        return false
    }

    move() {
        let {x, y} = this._getHead()
        switch (this._direction) {
            case DIRECTION.RIGHT: x += 1; break
            case DIRECTION.LEFT: x -= 1; break
            case DIRECTION.UP: y -= 1; break
            case DIRECTION.DOWN: y += 1; break
        }

        if (!(this._field.checkHitBorders({x, y}) || this._checkHitSelf({x, y}))) {
            this.points.push({x, y})
            new Point(this._field, x, y).draw()

            // if not eat
            this._clearTail()
        } else {
            return false
        }

        return true
    }

    set direction(value) {
        this._direction = DIRECTION[value] || DIRECTION.RIGHT
    }
}
