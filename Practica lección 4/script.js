const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
  const nota = Number(document.getElementById("nota").value);
  const cantidad = Number(document.getElementById("cantidad").value);

  resultado.innerHTML = "";

  if (nota > 0 && cantidad > 0) {
    for (let i = 1; i <= cantidad; i++) {
      let estado = nota >= 70 ? "Aprueba" : "Reprueba";
      resultado.innerHTML += `<p>Evaluación ${i}: ${estado}</p>`;
    }
  } else {
    resultado.innerHTML = "Por favor, ingrese valores válidos";
  }
});