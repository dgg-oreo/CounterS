"use strict"

let valor = 0
const numero = document.getElementById("valor")

function cambiar(cantidad) {
    valor += cantidad
    numero.textContent = String(valor)
}


document.getElementById("restar").addEventListener("click", () => cambiar(-1))
document.getElementById("sumar").addEventListener("click", () => cambiar(1))