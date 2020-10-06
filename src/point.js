export const FILLING = {
    FILL: 'fill',
    BORDERL: 'borderLeft',
    BORDERR: 'borderRight',
    BORDERT: 'borderTop',
    BORDERB: 'borderBottom',
    CIRCLE: 'circle',
    EMPTY: 'empty',
}
export const BORDERWIDTH = 1
export const STEP = 9

export class Point {
    constructor(field, x, y, fill = FILLING.FILL, color = 'black'){
        this._field = field
        this._x = /*field.getX(*/x//)
        this._y = y
        this._fill = fill
        this._step = STEP - BORDERWIDTH
        this._color = color
    }

    draw(){
        this._field.ctx.fillStyle = this._color

        switch (this._fill) {
            case FILLING.BORDERB:
                this._field.ctx.fillRect(this._x, this._y + BORDERWIDTH, STEP, BORDERWIDTH)
                break;
            case FILLING.CIRCLE:
                this._drawCirclePoint()
                break;
            case FILLING.EMPTY:
                this._clearPoint()
                break;
            default:
                this._drawSquarePoint()
        }
    }

    _clearPoint(){
        this._field.ctx.clearRect(this._x, this._y, this._step + BORDERWIDTH, this._step + BORDERWIDTH)
    }

    _drawCirclePoint() {
        const radius = Math.ceil(this._step / 2)
        this._field.ctx.arc(this._x + radius, this._y + radius, radius, 0, 360)
    }

    _drawSquarePoint(){
        this._field.ctx.fillRect(this._x, this._y, this._step, this._step)
    }
}
