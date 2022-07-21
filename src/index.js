import cipher from './cipher.js';


const encodeButton = document.getElementById("Cipher");
const decodeButton = document.getElementById("Decipher")
const finalText = document.getElementById("message2");

encodeButton.addEventListener("click" , () => {
    const firstText = document.getElementById("Message1").value;
    const offset = document.getElementById("displacement").value;
    finalText.value = cipher.encode(offset, firstText);
});
decodeButton.addEventListener("click" , () => {
    const firstText = document.getElementById("Message1").value;
    const offset = document.getElementById("displacement").value;
    finalText.value = cipher.decode(offset, firstText);
});
console.log(cipher);