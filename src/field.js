export class Field {
    constructor(element) {
        this._width = 500
        this._height = 400
        this._ctx = this.create(element)
    }

    create(element) {
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
}
