function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        muñeco.style.display = ("none");
        parrafoEncriptado.textContent = ("texto").value = textoCifrado; 
    } else {
        muñeco.src = "./img/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafoEncriptado = document.getElementById("parrafoEncriptado");
    let muñeco = document.getElementById("muñeco");
    let btnCopiar = document.getElementById("btnCopiar");
    let textoCifrado = texto
       
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u ");
    if (texto.length != 0) {
        document.getElementById("texto").value;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        muñeco.src = ("./img/encriptado.jpg").value = textoCifrado;
        parrafoEncriptado.textContent = ("texto").value = textoCifrado;
        //muñeco.style.display = ("none");
    } else {
        muñeco.src = "./img/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        alert("Debes ingresar algún texto");
        btnCopiar.style.display = "block";
        muñeco.style.display = "none";
        btnCopiar.style.display = "none";
    }
    navigator.clipboard.writeText(parrafoEncriptado.textContent);
    btnCopiar.textContent ="";

    

}