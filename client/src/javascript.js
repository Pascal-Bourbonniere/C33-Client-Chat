let ctx = null
let spriteList = []
window.addEventListener('load', () => {
    let canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    canvas.onmousemove = e => {

        const posX = e.pageX - canvas.offsetLeft
        spriteList.push(new asteroids(posX, e.pageY - canvas.offsetTop))
    }

    const tick = () => {
        window.setInterval(function() {
            ctx.clearRect(0, 0, 1550, 750)
        }, 4000)

        spriteList = spriteList.filter(s => s.isAlive)
        spriteList.forEach(s => s.tick())
        window.requestAnimationFrame(tick)
    }
    tick()
})
document.onkeyup = (e) => {
    if (e.code == 'Space') {
        window.setInterval(function() {
            ctx.clearRect(0, 0, 1550, 750)
        }, 4000)
    }
}