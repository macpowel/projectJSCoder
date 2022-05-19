let carrito = [];
let precioTotal = 0;


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

}

