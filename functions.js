var carrito = [];
var precioTotal = 0;


function buyMiniature(){
    
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
                let mini = new miniature (askName, askDetail, askSize);
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
                let set = new setting (askName, askDetail, askSquares);
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

}
function newRequest(){
    //en construccion
    let name = document.forms["myForm"]["name"].value;
    let tel = document.forms["myForm"]["tel"].value;
    let email = document.forms["myForm"]["email"].value;
    let reques = document.forms["myForm"]["request"].value
    //let req = new request (name, tel, email, reques);
    //carrito.push(req);
    alert(name+tel+email+reques);
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
        let askType = prompt("Que tipo desea ver en su carrito?").toLowerCase()
    }
    const type = carrito.filter((el) => el.constructor.name == askType)
    const car = type.map((el) => el.constructor.name + ": " + el.name + ": " + el.price)
    alert("Su carrito: \n" + car.join("\n"));
}

