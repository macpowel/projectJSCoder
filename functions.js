carrito = [];
let precioTotal = 0;

//work in progress
function delButton(){
  if(carrito.length == 1){
    let butDis = document.getElementById("buttonMain")
    let li = document.createElement("button")
    li.innerHTML = `<input
    type="button"
    id="buttonDelete"
    value="Delete Last Added"
    >`;
    butDis.appendChild(li)
    let buttonDel = document.getElementById("buttonDelete")
    buttonDel.addEventListener("click", deleteLast)
    buttonDel.onmouseover = () => { buttonDel.classList.toggle("buttonOver")}
    
  }
}

function newRequest(){
    
    let name = document.forms["myForm"]["name"].value;
    let tel = document.forms["myForm"]["tel"].value;
    let email = document.forms["myForm"]["email"].value;
    let reques = document.forms["myForm"]["request"].value
    
        let req = new Request (name, tel, email, reques);
        carrito.push(req);
        const names = carrito.map((el) => el.name + ": " + el.price)
        document.getElementById("miniCart").innerHTML = names;
        document.forms["myForm"]["name"].value ="";
        document.forms["myForm"]["tel"].value ="";
        document.forms["myForm"]["email"].value ="";
        document.forms["myForm"]["request"].value ="";
        saveCartSession();
        showList();
   
    
}

function priceTotal(){
    let total = 0;
    carrito.forEach((product)=>{
        if(product.constructor.name != "Request"){
             total = total + product.price
        }
    }
    )
   let precTot = document.getElementById("priceTotal")
   precTot.innerHTML= `<div >${total}</div>`;

}
function showList(){

    let counter = document.getElementById("counterMini")
    let display = document.getElementById("miniList")
    display.innerHTML= "";
    let num = 0;

    carrito.forEach( (product)=> {
        if (product.constructor.name == "Miniature"){
            num++
            const{name, size, detailLevel, price } = product;
            let legend = `Name: ${name} - Size: ${size} - Detail Level: ${detailLevel} - Price ${price} `
            let li = document.createElement("p")
            li.innerHTML = `<p class = "listMini">${legend}</p>`
            display.appendChild(li)
        }
        })
    
    
    num >0 ?  counter.innerText = num + " in cart " :   counter.innerText = "Minis in cart: 0";


    let counterS = document.getElementById("counterSetting")
    let displayS = document.getElementById("setList")
    let numS = 0;
    displayS.innerHTML= "";

    carrito.forEach( (product)=> {
        if (product.constructor.name == "Setting"){
            numS++
            const{name, squares, detailLevel, price } = product;
            let legend = `Name: ${name} - Squares: ${squares} - Detail Level: ${detailLevel} - Price ${price} `
            let li = document.createElement("p")
            li.innerHTML = `<p class = "listMini">${legend}</p>`
            displayS.appendChild(li)
        }
        })
    
    
    numS >0 ?  counterS.innerText = numS + " in cart " :   counterS.innerText = "Setting in cart: 0";


    let counterR = document.getElementById("counterReq")
    let displayR = document.getElementById("reqList")
    let numR = 0;
    displayR.innerHTML= "";

    carrito.forEach( (product)=> {
        if (product.constructor.name == "Request"){
            numR++
            const{name, tel, email, request, price } = product;
            let legend = `Name: ${name}\n- Tel: ${tel}\n - email: ${email}\n - request ${request}\n - price ${price}`
            let li = document.createElement("p")
            li.innerHTML = `<p class = "listReq">${legend}</p>`
            displayR.appendChild(li)
        }
        })
    
    numR>0 ?  counterR.innerText = numR + " in cart " :   counterR.innerText = "Requests in cart : 0";
    priceTotal()


}

function newMiniature(){
    let name = document.forms["myFormMini"]["name"].value;
    let size = document.forms["myFormMini"]["size"].value;
    let detailLevel = document.forms["myFormMini"]["detailLevel"].value.toLowerCase();
   
   

    if (detailLevel != "low" && detailLevel != "high" || carrito.filter((obj) => obj.name === name).length){
    }else{ 
        let mini = new Miniature (name, detailLevel, size);
        mini.priceCalculator();
        carrito.push(mini);
        const names = carrito.map((el) => el.name + ": " + el.price)
        document.getElementById("miniCart").innerHTML = "Cart: "+names;
        showList();
        document.forms["myFormMini"]["name"].value = "";
        document.forms["myFormMini"]["size"].value = "";
        document.forms["myFormMini"]["detailLevel"].value = "";}
        priceTotal();
        saveCartSession();
  
}


function deleteLast(){
    carrito.pop();
    saveCartSession();
    showList()

    const names = carrito.map((el) => el.name + ": " + el.price)
    carrito.length == 0 ?  document.getElementById("miniCart").innerHTML = "Empty Cart" : document.getElementById("miniCart").innerHTML = names; ;

}

function newSetting(){
    let name = document.forms["myFormSet"]["name"].value;
    let squares = document.forms["myFormSet"]["squares"].value;
    let detailLevel = document.forms["myFormSet"]["detailLevel"].value.toLowerCase();
   
    if (detailLevel != "low" && detailLevel != "high"){
    }else{ 
        let set = new Setting (name, detailLevel, squares);
        set.priceCalculator();
        carrito.push(set);
        const namesSet = carrito.map((el) => el.name + ": " + el.price)
        document.getElementById("miniCart").innerHTML = namesSet;
        showList();
        document.forms["myFormSet"]["name"].value = "";
        document.forms["myFormSet"]["squares"].value = "";
        document.forms["myFormSet"]["detailLevel"].value = "";}
        saveCartSession();
}

function saveCartSession(){
    sessionStorage.clear();
    const saveSession = (key, value) => {sessionStorage.setItem(key, value)};
    for(let i = 0; carrito.length > i; i++){
            saveSession(carrito[i].constructor.name + i, JSON.stringify(carrito[i]));
        }
    
   

   
    
}

function getCartSession(){
    carrito = [];
    let keys = Object.keys(sessionStorage)
    
    for(let key of keys) {
        let firstC = key.charAt(0);
        let stored = JSON.parse(sessionStorage.getItem(key))
        if(firstC == "S"){
           let set = new Setting (stored["name"], stored["detailLevel"], stored["squares"])
           carrito.push(set)
           showList(1);
           showList(2);
           showList(3);
           const names = carrito.map((el) => el.name + ": " + el.price)
           document.getElementById("miniCart").innerHTML = names;
   
        }
        if(firstC == "M"){
           
            let set = new Miniature (stored["name"], stored["detailLevel"], stored["size"])
            console.log(set.detailLevel)
            carrito.push(set)
            showList()
            const names = carrito.map((el) => el.name + ": " + el.price)
            document.getElementById("miniCart").innerHTML = names;
    
         }
         if(firstC == "R"){
            let req = new Request (stored["name"], stored["tel"], stored["email"], stored["request"])
            carrito.push(req)
            showList()
            const names = carrito.map((el) => el.name + ": " + el.price)
            document.getElementById("miniCart").innerHTML = names;

         }
       
}
}
