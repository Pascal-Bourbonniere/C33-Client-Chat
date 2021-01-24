MIN_SPEED = 10
class Sans {
    constructor() {


        this.element = document.createElement('div')
        this.element.setAttribute("class", "Sans_2 Sans")
        this.x = 1
        this.y = 35
        this.isAlive = true;
        this.right = true;
        this.velocity = -Math.random() * 8 + MIN_SPEED
        document.getElementById('Sans_Container').appendChild(this.element);
        this.move()
        document.getElementById('Sans_Container')
        this.element.onclick = (e) => {
            this.right = false
            this.element.setAttribute("class", "Sans_1 Sans")
            score++
            document.getElementById('score').innerHTML = `${score}`

        }


    }
    move() {

        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`
    }

    tick() {
        if (life > 0) {


            if (this.right) {
                if (this.x > 1825) {
                    this.isAlive = false
                    this.element.remove()
                    if (this.right) {
                        life--
                        document.getElementById('life').innerHTML = `${life}`
                    }
                }
                if (this.x <= 0) {
                    this.velocity *= -1
                }
                this.x += this.velocity
            } else {
                if (this.x > 1825) {
                    this.velocity *= -1
                }
                if (this.x <= 0) {
                    this.isAlive = false
                    this.element.remove()
                }
                this.x -= this.velocity

            }
            this.move()
        } else if (life == 0) {

            this.element.setAttribute("class", "Sans_3 Sans")
            this.x = 930
            this.y = 35
            this.velocity = 0
            this.move()
        }

    }
}