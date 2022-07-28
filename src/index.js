import cipher from './cipher.js';

/*Variable página 1*/
const firstPage = document.getElementById("page1");
/*Variable página 2*/
const secondPage = document.getElementById("page2");
/*Variable botón "Comenzar"*/
const showPage2 = document.getElementById("showPage2");
//Variable boton "Volver al inicio"
const showPage1 = document.getElementById("showPage1");

/*Escujchador botón "Comenzar"*/
showPage2.addEventListener("click", () => {
    /*ocultar página 1*/
    firstPage.style.display = "none";
    /*mostrar página 2*/
    secondPage.style.display = "block";
});

/*escuchador de botón "Volver al inicio"*/
showPage1.addEventListener("click", () => {
    firstPage.style.display = "block";
    secondPage.style.display = "none";
});

/*En este punto estoy creando un alert que advierta al usuario sobre la confidencialidad de la página*/
alert ("Tenga presente el acuerdo de confidencialidad que debe acatar al hacer uso de esta App");

/*Aquì estoy declarando una variable que limpie caracteres*/
const clearText = document.getElementById("clear");

/* Escuchador del botón "Limpiar"*/
clearText.addEventListener("click", () => {
    document.getElementById("Message1").value = "";
    document.getElementById("message2").value = "";
    document.getElementById("displacement").value = "";  
});

/*Declaro las variables encode & decode*/
const encodeButton = document.getElementById("Cipher");
const decodeButton = document.getElementById("Decipher")
const finalText = document.getElementById("message2");

/*Escuchador de los botones "cifrar" & "descifrar"*/
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
