// import { xorEncrypt, xorDecrypt } from "./XORencryption.js";

const initialInput = document.querySelector("#input");
const keyInput = document.querySelector("#key");
const encryptButton = document.querySelector("#encrypt");
const decryptButton = document.querySelector("#decrypt");
const output = document.querySelector("#output");
const copyButton = document.querySelector("#copy");

encryptButton.addEventListener("click", () => {
  try {
    const input = initialInput.value;
    const key = keyInput.value;
    const encrypted = xorEncrypt(input, key);
    output.value = encrypted;
  } catch (error) {
    output.value = "Error: " + error.message;
  }
});

decryptButton.addEventListener("click", () => {
  try {
    const input = initialInput.value;
    const key = keyInput.value;
    const decrypted = xorDecrypt(input, key);
    output.value = decrypted;
  } catch (error) {
    output.value = "Error: " + error.message;
  }
});

copyButton.addEventListener("click", () => {
  output.select();
  document.execCommand("copy");
});
