const application = document.body
const character = document.getElementById("character")
const item = document.getElementById("item")

let charCurrentPos
let itemCurrentPos



application.addEventListener("keypress", (e) => {
    item.classList.add("move")
    if (e.key.charCodeAt() == 32) {
        character.classList.add("jump")
        setTimeout(() => {
            character.classList.remove("jump")
        }, 500 )
    }
    setInterval(Dead, 100)
})

function Dead() {
     itemCurrentPos = parseInt(window.getComputedStyle(item).left)
     charCurrentPos = parseInt(window.getComputedStyle(character).top)

     if (itemCurrentPos <= 240 && itemCurrentPos > 200 && charCurrentPos > 80) {
         const answer = confirm("You're dead. Play again?")
         if (answer) {
             location.reload()
         }
     }
}


