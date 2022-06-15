
let buttonDel = document.getElementById("buttonDelete")
buttonDel.addEventListener("click", deleteLast)
buttonDel.onmouseover = () => { buttonDel.classList.toggle("buttonOver")}

let buttonGetSession = document.getElementById("buttonGetSession")
buttonGetSession.addEventListener("click", getCartSession)

let buttonMini = document.getElementById("myFormMini")
buttonMini.addEventListener("submit", newMiniature)

let buttoncito = document.getElementById("form")
buttoncito.addEventListener("submit", newRequest)

let buttonSet = document.getElementById("myFormSet")
buttonSet.addEventListener("submit", newSetting)





            



