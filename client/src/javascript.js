let ctx = null
let spriteList = []
window.addEventListener('load', () => {
    let canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
        //fais apparaitre les etoiles filante sur le canvas quand on bouge la sourie//
    canvas.onmousemove = e => {

            spriteList.push(new asteroids())
        }
        //controle la vitesse a laquel les etoiles filante apparait//
    const tick = () => {

        ctx.clearRect(0, 0, 1550, 750)


        spriteList = spriteList.filter(s => s.isAlive)
        spriteList.forEach(s => s.tick())

        window.requestAnimationFrame(tick)
    }
    setTimeout(tick, 30)
})