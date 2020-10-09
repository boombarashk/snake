import { Point, FILLING} from "./point";
import { Figure } from "./figure";

export const DIRECTION = {
    RIGHT: 'Right',
    LEFT: 'Left',
    UP: 'Up',
    DOWN: 'Down'
}

export class Snake extends Figure {
    constructor(field, setOfPoint) {
        super(field, FILLING.FILL)
        this._direction = DIRECTION.RIGHT
        this.points = setOfPoint
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

    _eat(food, {x, y}) {
        if (food.x === x && food.y === y) {
            return true
        }
        return false
    }

    move(food) {
        let {x, y} = this._getHead()

        switch (this._direction) {
            case DIRECTION.RIGHT: x += 1; break
            case DIRECTION.LEFT: x -= 1; break
            case DIRECTION.UP: y -= 1; break
            case DIRECTION.DOWN: y += 1; break
        }

        if (!(this._field.checkHitBorders({x, y}) || this._checkHitSelf({x, y}))) {
            this.points.push({x, y})

            const snakeEat = this._eat(food, {x, y})
            if (snakeEat) {
                this._field.addPoints()
                food.clear()
            } else {
                this._clearTail()
            }

            new Point(this._field, x, y).draw()
        } else {
            return false
        }

        return true
    }

    get direction() {
        return this._direction
    }

    set direction(value) {
        this._direction = value || DIRECTION.RIGHT
    }
}
