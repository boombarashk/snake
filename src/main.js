import { Field } from "./field";
import { Border } from "./border";
import { FILLING } from "./point";
import { Snake } from "./snake";

window.onload = () => {

    const field = new Field( document.getElementById('container') )

    new Border(field, null, FILLING.BORDERT)
    new Border(field, null, FILLING.BORDERL)
    new Border(field, null, FILLING.BORDERB)
    new Border(field, null, FILLING.BORDERR)

    const snake = new Snake(field, [{x:5, y:3}, {x:6, y:3}, {x:7, y:3}, {x:8, y:3}])

    document.onkeydown = ev => {
        //if (ev.keyCode === 32) {/* PAUSE */}

        if (["ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown"].includes(ev.key)) {
            snake.direction = ev.key.substr(5).toUpperCase()
        }
    }


    let timerId
    let playing = true
    const SPEED = 800
    const play = () => {
        timerId = setInterval(() => {
            const snakeMoved = snake.move()
            if (!snakeMoved) {
                clearInterval(timerId)
                console.log('GAME OVER')
            }
        }, SPEED)
    }

    play()

/*
    const pc = new Point(field, 5, 7, FILLING.CIRCLE, 'green')
    pc.draw()
*/
}
