let buttonCart = document.getElementById("buttonCart")
buttonCart.addEventListener("click", showCart)
buttonCart.onmouseover = () => { buttonCart.classList.toggle("buttonOver")}


let buttonFilter = document.getElementById("buttonFilter")
buttonFilter.addEventListener("click", showSelected)
buttonFilter.onmouseover = () => { buttonFilter.classList.toggle("buttonOver")}


let buttonMini = document.getElementById("miniInput")
buttonMini.addEventListener("click", newMiniature)
            



