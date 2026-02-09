const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
    const precio = Number(document.getElementById("precio").value);
    const descuento = Number(document.getElementById("descuento").value);
    const cantidad = Number(document.getElementById("cantidad").value);

    resultado.innerHTML = "";
    
    if(precio > 0 && cantidad > 0){
     
       let total = 0;

       for(var i = 1; i <= cantidad; i++){
        let descuentoFinal = (precio * descuento) / 100;
        let precioFinal = precio - descuentoFinal;

        total += precioFinal;

        resultado.innerHTML += `
        <p> Producto ${i}: Precio final C${precioFinal}</p>
        `
       }

       resultado.innerHTML += `<h3>Total a pagar: C${total}</h3>`
    }
    else {
        resultado.innerHTML = "Por favor, ingrese un valor válido";
    }
});