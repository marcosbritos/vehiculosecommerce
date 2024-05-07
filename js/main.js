let mensajePrecio =""
const mensajeInicial = " Ingrese el codigo del producto a consultar: \n" +
                       "Producto 1 🏎️ \n"+
                       "Producto 2 🚗 \n"+
                       "Producto 3 🚙\n"+
                       "Producto 4 🚚\n"+
                       "Producto 5 🏍️\n"+
                       "Producto 6 🚎\n"+
                       "Producto 7 🚛\n" 


function necesitoPrecios () {
    let seleccion = prompt (mensajeInicial).trim()
    if (seleccion !== "1" && seleccion !== "2" && seleccion !== "3" && seleccion !== "4" && seleccion !== "5" && 
    seleccion !== "6" && seleccion !== "7" ) {
    alert ("❌Codigo inexistente, ingrese codigo valido")
    return necesitoPrecios ()
    } else{

    let valorTotal
    let cuotas

    switch(seleccion) {
        case "1": valorTotal = 20000
            break
        case "2": valorTotal = 16000
            break
        case "3": valorTotal = 10000
            break
        case "4": valorTotal = 15000
            break
        case "5": valorTotal = 25000
            break
        case "6": valorTotal = 23000
            break
        case "7": valorTotal = 24000
            break
        default:
    }
    alert ("Precio del producto$" + valorTotal)
    let resultado = confirm(" ¿Necesitas pagar en cuotas?")
if(resultado == true) {
    cuotas = prompt("Ingrese la cantidad de cuotas (2, 3 o 6):").trim()
    if (cuotas !== "2" && cuotas !== "3" && cuotas !== "6") {
        alert("❌ Cantidad de cuotas invalida, ingrese 2, 3 o 6")
        return necesitoPrecios()
    } else {
        const valorCuota = valorTotal / cuotas
        alert("El valor por cuota es $" + valorCuota.toFixed(2))
        }
    }
}
resultado = confirm(" ¿Necesitas otro precio?")
if (resultado == true) {
    necesitoPrecios()
} else {
alert("Gracias por tu visita 😉")
}
}