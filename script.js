//TODO import { encrypt, decrypt } from "./encryption.js";

const initialInput = document.querySelector("#input");
const keyInput = document.querySelector("#key");
const encryptButton = document.querySelector("#encrypt");
const decryptButton = document.querySelector("#decrypt");
const output = document.querySelector("#output");
const copyButton = document.querySelector("#copy");

encryptButton.addEventListener("click", () => {});

decryptButton.addEventListener("click", () => {});

copyButton.addEventListener("click", () => {
  output.select();
  Clipboard.apply(Selection);
  // document.execCommand("copy");
});
