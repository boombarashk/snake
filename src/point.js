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
export const STEP = 10

export class Point {
    constructor(field, x, y, fill = FILLING.FILL, color = 'black'){
        this._field = field
        this._x = field.gridCoord(x)
        this._y = field.gridCoord(y)
        this._fill = fill
        this._step = STEP - BORDERWIDTH
        this._color = color
    }

    draw(){
        this._field.ctx.fillStyle = this._color

        switch (this._fill) {
            case FILLING.BORDERL:
                this._field.ctx.fillRect(STEP - 2 * BORDERWIDTH, this._y , BORDERWIDTH, STEP)
                break;
            case FILLING.BORDERR:
                this._field.ctx.fillRect(this._x, this._y , BORDERWIDTH, STEP)
                break;
            case FILLING.BORDERB:
                this._field.ctx.fillRect(this._x, this._y, STEP , BORDERWIDTH)
                break;
            case FILLING.BORDERT:
                this._field.ctx.fillRect(this._x, STEP - 2* BORDERWIDTH, STEP, BORDERWIDTH)
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
        this._field.ctx.fillStyle = 'white'
        this._field.ctx.fillRect(this._x, this._y, STEP, STEP)
    }

    _drawCirclePoint() {
        const radius = Math.ceil(this._step / 2)
        this._field.ctx.arc(this._x + radius, this._y + radius, radius, 0, 360)
        this._field.ctx.fill()
    }

    _drawSquarePoint(){
        this._field.ctx.fillRect(this._x, this._y, this._step, this._step)
    }
}
