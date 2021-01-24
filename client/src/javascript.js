let ctx = null
let spriteList = []
window.addEventListener('load', () => {
    let canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    canvas.onmousemove = e => {

        spriteList.push(new asteroids())
    }

    const tick = () => {

        ctx.clearRect(0, 0, 1550, 750)


        spriteList = spriteList.filter(s => s.isAlive)
        spriteList.forEach(s => s.tick())

        window.requestAnimationFrame(tick)
    }
    setTimeout(tick, 30)
})