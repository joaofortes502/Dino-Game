const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if (dino.classList != "jump"){
    dino.classList.add("jump");

    setTimeout(function(){
        dino.classList.remove("jump");
    }, 300)
 }
}

let vivo = setInterval(function() {
    // posição Y do Dino
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    // posição X do Cacto
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    // colisão
    if(cactusLeft <50 && cactusLeft > 0 && dinoTop >= 140)
      alert("Você Perdeu!")
}, 10);

document.addEventListener("keydown", function(event) {
    jump();
})

