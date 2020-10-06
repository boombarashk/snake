import { Field } from "./field";
import { Point } from "./point";

window.onload = () => {

    const field = new Field( document.getElementById('container') )

    const p = new Point(field, 100, 100)
    p.draw()

}
