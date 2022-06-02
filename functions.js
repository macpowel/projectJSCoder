carrito = [];
var precioTotal = 0;

function buyMiniature(){
    //Paso a ser newMiniature por eventos
    
    let ask = parseInt(prompt("Ingrese accion: agregar miniatura use 1, quitar ultima miniatura use 2, finalizar use 3"))
        while (ask != 3){
            if (ask == 1){
                
                let askName = prompt("De que desea su miniatura?")
                let askSize = prompt("De que tamaño la desea? en CM")
                while (isNaN(askSize)){
                    alert("input erroneo, pruebe de nuevo")
                    askSize = prompt("De que tamaño la desea? en CM")
                }
                let askDetail = prompt("Que nivel de detalle desea? high or low??")
                askDetail.toLowerCase();
                while (askDetail != "high" && askDetail != "low"){
                    alert("input erroneo, pruebe de nuevo")
                    askDetail = prompt("Que nivel de detalle desea? high or low??").toLowerCase();
                  
                }
                let mini = new Miniature (askName, askDetail, askSize);
                mini.priceCalculator();
                alert ("El precio seria" + mini.price)
                carrito.push(mini);
                alert ("Se ha agregado con exito");

            
                ask = parseInt(prompt("Ingrese accion: Agregar use 1, restar ultimo objeto use 2, finalizar use 3"))
        
            }else if ( ask == 2 && carrito.length > 0){
                carrito.pop();
                alert ("Se ha restado con exito")
                
                ask = parseInt(prompt("Ingrese accion: Agregar use 1, restar ultimo objeto use 2, finalizar use 3"))
        
            }else{
                alert ("input erroneo, trate de nuevo")
                ask = parseInt(prompt("Ingrese accion: Agregar use 1, restar ultimo objeto use 2, finalizar use 3"))
            }
        }
     const names = carrito.map((el) => el.name + ": " + el.price)
     document.getElementById("miniCart").innerHTML = names;

     showList(1);

    
     
}

function buySetting(){
    
    let ask = parseInt(prompt("Ingrese accion: agregar Setting use 1, quitar ultimo Setting use 2, finalizar use 3"))
        while (ask != 3){
            if (ask == 1){
                
                let askName = prompt("De que desea su setting?")
                let askSquares = prompt("De que tamaño la desea? por cuadrado (5 pies)")
                while (isNaN(askSquares)){
                    alert("input erroneo, pruebe de nuevo")
                    askSquares = prompt("De que tamaño la desea? por cuadrado (5 pies)")
                }
                let askDetail = prompt("Que nivel de detalle desea? high or low??")
                askDetail.toLowerCase();
                while (askDetail != "high" && askDetail != "low"){
                    alert("input erroneo, pruebe de nuevo")
                    askDetail = prompt("Que nivel de detalle desea? high or low??").toLowerCase();
                  
                }
                let set = new Setting (askName, askDetail, askSquares);
                set.priceCalculator();
                alert ("El precio seria" + set.price)
                carrito.push(set);
                alert ("Se ha agregado con exito");

            
                ask = parseInt(prompt("Ingrese accion: Agregar use 1, restar ultimo objeto use 2, finalizar use 3"))
        
            }else if ( ask == 2 && carrito.length > 0){
                carrito.pop();
                alert ("Se ha restado con exito")
                
                ask = parseInt(prompt("Ingrese accion: Agregar use 1, restar ultimo objeto use 2, finalizar use 3"))
        
            }else{
                alert ("input erroneo, trate de nuevo")
                ask = parseInt(prompt("Ingrese accion: Agregar use 1, restar ultimo objeto use 2, finalizar use 3"))
            }
        }

     const names = carrito.map((el) => el.name + ": " + el.price)
     document.getElementById("miniCart").innerHTML = names;
     
     showList(2);

     
}

function newRequest(){
    
    let name = document.forms["myForm"]["name"].value;
    let tel = document.forms["myForm"]["tel"].value;
    let email = document.forms["myForm"]["email"].value;
    let reques = document.forms["myForm"]["request"].value
    let req = new Request (name, tel, email, reques);
    carrito.push(req);
    alert(name+tel+email+reques);
    const names = carrito.map((el) => el.name + ": " + el.price)
    document.getElementById("miniCart").innerHTML = names;
    document.forms["myForm"]["name"].value ="";
    document.forms["myForm"]["tel"].value ="";
    document.forms["myForm"]["email"].value ="";
    document.forms["myForm"]["request"].value ="";
    
}

function showCart(){
    //let holder = [];
    //for (let i = 0; i<carrito.length; i++){(holder.push(carrito[i].name))}
    //alert("Su carrito tiene:\n " + holder.join(", "));
    const names = carrito.map((el) => el.constructor.name + ": " + el.name + ": " + el.price)

    alert("Su carrito: \n" + names.join("\n"));
}

function showSelected(){
    let askType = prompt("Que tipo desea ver en su carrito?").toLowerCase();
    while (askType != "setting" && askType != "miniature"){
        alert("input erroneo, pruebe de nuevo");
        askType = prompt("Que tipo desea ver en su carrito?").toLowerCase()
    }
    const type = carrito.filter((el) => el.constructor.name == askType)
    const car = type.map((el) => el.constructor.name + ": " + el.name + ": " + el.price)
    alert("Su carrito: \n" + car.join("\n"));
}

function showList(number){
 
    switch(number){
        case 1:
            let counter = document.getElementById("counterMini")
            let display = document.getElementById("sectionMini")
            let num = 0;

            carrito.forEach( (product)=> {
                if (product.constructor.name == "Miniature"){
                    num++
                    let legend = `Name: ${product.name} - Size: ${product.size} - Detail Level: ${product.detailLevel} - Price ${product.price} `
                    let li = document.createElement("p")
                    li.innerHTML = `<p class = "listMini">${legend}</p>`
                    display.appendChild(li)
                }
                })
            
            
            if (num >0){
                counter.innerText = num + " in cart ";
            }else{
                counter.innerText = "";
            }

            break;

        case 2:

            let counterS = document.getElementById("counterSetting")
            let displayS = document.getElementById("sectionSet")
            let numS = 0;
            carrito.forEach( (product)=> {
                if (product.constructor.name == "Setting"){
                   numS++
                   let legend = `Name: ${product.name} - Size: ${product.squares} - Detail Level: ${product.detailLevel} - Price ${product.price} `
                    let li = document.createElement("div")
                    li.innerHTML = `<p class = "listSet">${legend}</p>`
                    displayS.appendChild(li)
                  
                }
               })
            
            if (numS >0){
               counterS.innerText = numS + " in cart ";
            }else{
               counterS.innerText = "";
            }
       
             break;
        
        case 4:
                

        }
}

function newMiniature(){
    let name = document.forms["myFormMini"]["name"].value;
    let size = document.forms["myFormMini"]["size"].value;
    let detailLevel = document.forms["myFormMini"]["detailLevel"].value.toLowerCase();
   
    if (name == "" || detailLevel == "" || size == ""){
        alert("Must fill all fields")

    }else if (detailLevel != "low" && detailLevel != "high"){
        alert("Must choose between high or low detail level")
    }else{ 
        let mini = new Miniature (name, detailLevel, size);
        mini.priceCalculator();
        carrito.push(mini);
        alert(name + size + detailLevel);
        const names = carrito.map((el) => el.name + ": " + el.price)
        document.getElementById("miniCart").innerHTML = names;
        showList(1);
        document.forms["myFormMini"]["name"].value = "";
        document.forms["myFormMini"]["size"].value = "";
        document.forms["myFormMini"]["detailLevel"].value = "";}
    
  
}

