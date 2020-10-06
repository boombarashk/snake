import {STEP} from "./point";

export class Field {
    constructor(element) {
        this._width = 500
        this._height = 400
        this._ctx = this._create(element)
        this._gridCalculate()
    }

    _create(element) {
        const canv = document.createElement('canvas');
        canv.width = this._width
        canv.height = this._height
        canv.style.backgroundColor="white"
        element.insertAdjacentElement('afterbegin', canv)
        return canv.getContext('2d');
    }

    get ctx() {
        return this._ctx
    }

    _gridCalculate(){
        this._grid = {
            countX: Math.floor(this._width / STEP),
            countY: Math.floor(this._height / STEP),
        }
    }

    get grid(){
        return this._grid
    }

    gridCoord(value) {
        return value * STEP
    }

    checkHitBorders({x, y}) {
        return x === 0 || x === (this._grid.countX - 1) || y === 0 || y === (this._grid.countY - 1)
    }
}
