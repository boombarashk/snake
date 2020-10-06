import { Field } from "./field";
import { Border } from "./border";
import { Point, FILLING } from "./point";
import {Figure} from "./figure";

window.onload = () => {

    const field = new Field( document.getElementById('container') )

    const borderTop = new Border(field, null, FILLING.BORDERT)
    const borderLeft = new Border(field, null, FILLING.BORDERL)
    const borderBottom = new Border(field, null, FILLING.BORDERB)
    const borderRight = new Border(field, null, FILLING.BORDERR)

    const snake = new Figure(field, [{x:5, y:3}, {x:6, y:3}, {x:7, y:3}, {x:8, y:3}])
    snake.draw()
/*
    const pc = new Point(field, 5, 7, FILLING.CIRCLE, 'green')
    pc.draw()
*/
}
