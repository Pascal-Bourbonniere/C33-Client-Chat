let spriteList = []
let life = 3
let score = 0
    //creation du personnage sur lecran de jeu- apparait quand le personnage est sortie de lecran a droite ou gauche//
window.addEventListener("load", () => {
    spriteList.push(new Sans())
    const tick = () => {
        spriteList.forEach(s => s.tick())
        spriteList = spriteList.filter(s => s.isAlive)
        window.requestAnimationFrame(tick);
        if (spriteList.length == 0) {

            spriteList.push(new Sans())
        }
    }
    tick();
});