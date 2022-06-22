function flickBut(button){
    let counter = 0
    const interval = setInterval(() =>{
        counter++;

        if(counter %2==0){
            button.classList.add("popup-active")
        }else{
            button.classList.remove("popup-active")
        }

        if(counter>=6){
            clearInterval(interval)
        }
    },1000)
}