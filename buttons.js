let buttonCart = document.getElementById("buttonCart")
buttonCart.addEventListener("click", showCart)
buttonCart.onmouseover = () => { buttonCart.classList.toggle("buttonOver")}


let buttonFilter = document.getElementById("buttonFilter")
buttonFilter.addEventListener("click", showSelected)
buttonFilter.onmouseover = () => { buttonFilter.classList.toggle("buttonOver")}

let buttonSaveSession = document.getElementById("buttonSaveSession")
buttonSaveSession.addEventListener("click", saveCartSession)

let buttonGetSession = document.getElementById("buttonGetSession")
buttonGetSession.addEventListener("click", getCartSession)


let buttonMini = document.getElementById("myFormMini")
buttonMini.addEventListener("submit", newMiniature)

let buttoncito = document.getElementById("form")
buttoncito.addEventListener("submit", newRequest)

let buttonSet = document.getElementById("myFormSet")
buttonSet.addEventListener("submit", newSetting)
            



