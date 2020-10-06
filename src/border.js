import { Figure } from "./figure";
import { FILLING } from "./point";

export class Border extends Figure{
    constructor(field, points = {}, fill){
        super(field, points, fill)
        this.create(field, fill)
    }

    create(field, fill) {
        this._orientationVertical = fill === FILLING.BORDERL || fill === FILLING.BORDERR

        this.points = Array.from({
            length: this._orientationVertical
                ? field.grid.countY
                : field.grid.countX
        }, (_, i) => {
            let x, y
            if (fill === FILLING.BORDERT || fill === FILLING.BORDERL) {
                x = this._orientationVertical ? 0 : i
                y = this._orientationVertical ? i : 0
            } else {
                x = this._orientationVertical ? field.grid.countX - 1 : i
                y = this._orientationVertical ? i : field.grid.countY - 1
            }

            return { x, y }
        })

        this.draw()
    }
}
