import cipher from './cipher.js';

const firstPage = document.getElementById("page1");
const secondPage = document.getElementById("page2");
//Botón "cifre su mensaje"
const showPage2 = document.getElementById("showPage2");
//variable boton inicio
const showPage1 = document.getElementById("showPage1");

showPage2.addEventListener("click", () => {
    /*ocultar página 1*/
    firstPage.style.display = "none";
    /*mostrar página 2*/
    secondPage.style.display = "block";
});

//escuchador de botón inicio
showPage1.addEventListener("click", () => {
    firstPage.style.display = "block";
    secondPage.style.display = "none";
});

alert ("Tenga presente el acuerdo de confidencialidad que debe acatar al hacer uso de esta App");

//declarar variable para limpiar caracteres
const clearText = document.getElementById("clear");

//escuchador boton limpiar
clearText.addEventListener("click", () => {
    document.getElementById("Message1").value = "";  
});



const encodeButton = document.getElementById("Cipher");
const decodeButton = document.getElementById("Decipher")
const finalText = document.getElementById("message2");

encodeButton.addEventListener("click" , () => {
    const Text1 = document.getElementById("Message1").value;
    const offset = document.getElementById("displacement").value;
    finalText.value = cipher.encode(offset, Text1);
});
decodeButton.addEventListener("click" , () => {
    const Text1 = document.getElementById("Message1").value;
    const offset = document.getElementById("displacement").value;
    finalText.value = cipher.decode(offset, Text1);
});

console.log(cipher);
