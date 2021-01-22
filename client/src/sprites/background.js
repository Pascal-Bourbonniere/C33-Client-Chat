class background {
    constructor() {
        this.element = document.createElement('div')
        this.element.setAttribute("class", "background")
        this.x = -4000
        this.y = 0
        this.speed = `${0.5}px`
        document.getElementById('background').appendChild(this.element);
        this.move()
        document.getElementById('background')


    }

    move() {
        this.x += this.speed
        this.element.style.left = `${this.x}px`
    }
    tick() {


        this.move()
    }
}