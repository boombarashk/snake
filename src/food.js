import {Figure} from "./figure";
import {Point, FILLING} from "./point";

export class Food extends Figure {
    constructor(field){
        super(field)
        this.eaten = false
        this.x = this._randomInRange(field.grid.countX - 2)
        this.y = this._randomInRange(field.grid.countY - 2)
        this.color = this._randomColor()
        this.createFood()
    }

    _randomColor() {
        const r = this._randomInRange(255, 0)
        const g = this._randomInRange(255, 0)
        const b = this._randomInRange(255, 0)
        return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
    }

    _randomInRange( max, min = 1) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    createFood(){
        new Point(this._field, this.x, this.y, FILLING.CIRCLE, this.color).draw()
    }

    clear() {
        this.eaten = true
        new Point(this._field, this.x, this.y, FILLING.EMPTY).draw()
    }
}
