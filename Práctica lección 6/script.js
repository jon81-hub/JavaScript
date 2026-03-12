const formulario = document.querySelector("#formulario");
const nombreInput = document.querySelector("#nombre");
const emailInput = document.querySelector("#email");
const edadInput = document.querySelector("#edad");
const colorInput = document.querySelector("#color");

const errorNombre = document.querySelector("#errorNombre");
const errorEmail = document.querySelector("#errorEmail");
const errorEdad = document.querySelector("#errorEdad");
const mensajeColor = document.querySelector("#mensajeColor");

const mensaje = document.querySelector("#mensaje");
const jsonOutput = document.querySelector("#jsonOutput");

nombreInput.addEventListener("keyup", () => {
    if (nombreInput.value.length < 3) {
        errorNombre.textContent = "Mínimo 3 carácteres";
        nombreInput.classList.add("invalido");
        nombreInput.classList.remove("valido");
    } else {
        errorNombre.textContent = "";
        nombreInput.classList.add("valido");
        nombreInput.classList.remove("invalido");
    }
});

edadInput.addEventListener("blur", () => {
    if (edadInput.value < 18) {
        errorEdad.textContent = "Debes ser mayor de edad.";
        edadInput.classList.add("invalido");
        edadInput.classList.remove("valido");
    } else {
        errorEdad.textContent = "";
        edadInput.classList.add("valido");
        edadInput.classList.remove("invalido");
    }
});

colorInput.addEventListener("keyup", () => {
    const color = colorInput.value.trim().toLowerCase();
    if (color === "azul") {
        mensajeColor.textContent = "¡Tu color favorito es azul!";
        mensajeColor.style.color = "blue";
    } else if (color !== "") {
        mensajeColor.textContent = `Tu color favorito es ${color}`;
        mensajeColor.style.color = "#333";
    } else {
        mensajeColor.textContent = "";
    }
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (nombreInput.value === "" || emailInput.value === "" || edadInput.value === "" || colorInput.value === "") {
        mensaje.textContent = "Todos los campos son obligatorios";
        mensaje.style.color = "red";
        return;
    }
    let usuario = {
        nombre: nombreInput.value,
        email: emailInput.value,
        edad: edadInput.value,
        colorFavorito: colorInput.value
    };
    let usuarioJSON = JSON.stringify(usuario, null, 2);
    jsonOutput.textContent = usuarioJSON;
    mensaje.textContent = "Registro exitoso";
    mensaje.style.color = "green";
});