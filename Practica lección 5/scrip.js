const input = document.getElementById("producto");
const btnAgregar = document.getElementById("agregar");
const btnBuscar = document.getElementById("buscar");
const btnFiltrar = document.getElementById("filtrar");
const lista = document.getElementById("lista");

let compras = [];

function mostrarLista(listaProductos) {
    lista.innerHTML = "";
    listaProductos.map(producto => {
        lista.innerHTML += `<li>${producto}</li>`;
    });
}

btnAgregar.addEventListener("click", () => {
    let nuevoProducto = input.value;
    compras.push(nuevoProducto);
    mostrarLista(compras);
});

btnBuscar.addEventListener("click", () => {
    let buscado = input.value;
    let encontrado = compras.find(producto => producto.toLowerCase() === buscado.toLowerCase());
    lista.innerHTML = `<li>${encontrado}</li>`;
});

btnFiltrar.addEventListener("click", () => {
    let filtrados = compras.filter(producto => producto.length > 5);
    mostrarLista(filtrados);
});