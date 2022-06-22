
let buttonDel = document.getElementById("buttonDelete")
buttonDel.addEventListener("click", deleteLast, test)

buttonDel.addEventListener('click', () =>{
    buttonDel.classList.add("popup-active")

    setTimeout (() => {
        buttonDel.classList.remove("popup-active")
    }, 2500)

})
buttonDel.onmouseover = () => { buttonDel.classList.toggle("buttonOver")}



let buttonGetSession = document.getElementById("buttonGetSession")
buttonGetSession.addEventListener("click", getCartSession)



let buttonMini = document.getElementById("myFormMini")
let buttonSub = document.getElementById("miniInput")
buttonMini.addEventListener("submit", newMiniature)
buttonMini.addEventListener("submit",  () =>{
    buttonSub.classList.add("popup-active")
    setTimeout (() => {
        buttonSub.classList.remove("popup-active")
    }, 2500)

})

let buttoncito = document.getElementById("form")
let buttonOrdSub = document.getElementById("dddd")

buttoncito.addEventListener("submit", newOrder)
buttoncito.addEventListener("submit",  () =>{
    buttonOrdSub.classList.add("popup-active")
    setTimeout (() => {
        buttonOrdSub.classList.remove("popup-active")
    }, 2500)

})


let buttonSet = document.getElementById("myFormSet")
let buttonSetSub = document.getElementById("counterSetting")
buttonSet.addEventListener("submit", newSetting)
buttonSet.addEventListener("submit",  () =>{
    let counter = 0
    const interval = setInterval(() =>{
        counter++;

        if(counter %2==0){
            buttonSetSub.classList.remove("counterFlick")
        }else{
            buttonSetSub.classList.add("counterFlick")
        }

        if(counter>=4){
            clearInterval(interval)
        }
    },500)
})









            



