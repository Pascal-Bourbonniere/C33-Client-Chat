let tickCount = 100
let startPosition = 58
class Sans {
    constructor() {


        this.element = document.createElement('div')
        this.element.setAttribute("class", "Sans_2 Sans")
        this.x = 1
        this.y = 50
        this.isAlive = true;
        this.speed = 0.5
        this.velocity = 5
        document.getElementById('Sans_Container').appendChild(this.element);
        this.move()
        document.getElementById('Sans_Container')


    }
    move() {



        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`


        //this.move()


    }

    tick() {
        if (this.x > 1825) {
            this.isAlive = false
            this.element.remove()
        }
        if (this.x <= 0) {
            this.velocity *= -1
        }
        this.x += this.velocity

        this.move()
    }
}