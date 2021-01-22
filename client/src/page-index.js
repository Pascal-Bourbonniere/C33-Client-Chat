import { signin } from './chat-api.js';
let spriteList = []
window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function() {

        return signin(this);
    }
    const tick = () => {
        console.log("🚀 ~ file: javascript.js ~ line 17 ~ tick ~ spriteList", spriteList)
        spriteList.forEach(s => s.tick())
        spriteList = spriteList.filter(s => s.isAlive)


        spriteList.push(new Sans())
        window.requestAnimationFrame(tick)


    }
    tick()
});