import { Field } from "./field";
import { Border } from "./border";
import { FILLING } from "./point";
import { Snake, DIRECTION } from "./snake";
import { Food } from "./food";

window.onload = () => {

    const field = new Field( document.getElementById('container') )

    new Border(field, FILLING.BORDERT)
    new Border(field, FILLING.BORDERL)
    new Border(field, FILLING.BORDERB)
    new Border(field, FILLING.BORDERR)

    const snake = new Snake(field, [{x:5, y:3}, {x:6, y:3}, {x:7, y:3}, {x:8, y:3}])

    document.onkeydown = ev => {
        //if (ev.keyCode === 32) {/* PAUSE */}

        if (["ArrowUp", "ArrowLeft", "ArrowRight", "ArrowDown"].includes(ev.key)) {
            const directionKey = ev.key.substr(5)

            if (!(snake.direction === DIRECTION.UP && directionKey === DIRECTION.DOWN) &&
                !(snake.direction === DIRECTION.DOWN && directionKey === DIRECTION.UP) &&
                !(snake.direction === DIRECTION.LEFT && directionKey === DIRECTION.RIGHT) &&
                !(snake.direction === DIRECTION.RIGHT && directionKey === DIRECTION.LEFT)) {

                snake.direction = DIRECTION[directionKey.toUpperCase()]
            }
        }

    }


    let timerId
    let playing = true
    const SPEED = 400
    let food
    const play = () => {
        timerId = setInterval(() => {
            if (!food || food.eaten) {
                food = new Food(field)
            }

            const snakeMoved = snake.move(food)
            if (!snakeMoved) {
                clearInterval(timerId)
                field.gameOver()
            }
        }, SPEED)
    }

    play()
}
