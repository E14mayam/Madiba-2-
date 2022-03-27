const menu = document.querySelector(".menu")
const options = document.querySelector(".bt-bar")
const exit = document.querySelector(".exit")

console.log(menu)

exit.addEventListener("click", function(n){
    console.log("working")
    options.style.opacity = "0"
    exit.style.opacity = "0"
    options.style.zIndex = -10
    options.classList.remove('grow');
})

menu.addEventListener("click", function(e){
    console.log("working")
    options.style.opacity = 1
    exit.style.opacity = 1
    options.style.zIndex = 10
    options.classList.add('grow');
})
