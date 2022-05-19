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


function newRequest(){
    let name =document.forms["myForm"]["name"].value;
    let tel =document.forms["myForm"]["tel"].value;
    let email =document.forms["myForm"]["email"].value;
    let request =document.forms["myForm"]["request"].value;
    alert(name+tel+email+request)
}
function showCart(){
    //let holder = [];
    //for (let i = 0; i<carrito.length; i++){(holder.push(carrito[i].name))}
    //alert("Su carrito tiene:\n " + holder.join(", "));
    const names = carrito.map((el) => el.name + ": " + el.price)
    alert("Su carrito: \n" + names.join("\n"));
}

