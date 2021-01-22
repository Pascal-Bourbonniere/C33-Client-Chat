let tickCount = 100
let startPosition = 100
class Sans {
    constructor() {


        this.element = document.createElement('div')
        this.element.setAttribute("class", "Sans_1 Sans")
        this.x = 100
        this.y = 80
            //this.speed = 0.5
        this.isAlive = true;
        document.getElementById('background').appendChild(this.element);
        this.move()
        document.getElementById('background')


    }
    move() {
        tickCount = setInterval(() => {

            this.element.style.backgroundPosition = `${startPosition}px 80px`

            if (startPosition < 116) {
                startPosition = startPosition + 58;
            } else {
                startPosition = 100

            }


        }, 2000);
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`


    }
    removeSprite() {

        this.element.remove()
        this.isAlive = false


    }
    tick() {

        this.move()

    }
}