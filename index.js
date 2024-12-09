import { encrypt, decrypt } from "./scripts/encryption.js";

const initialInput = document.querySelector("#input");
const keyInput = document.querySelector("#key");
const encryptButton = document.querySelector("#encrypt");
const decryptButton = document.querySelector("#decrypt");
const output = document.querySelector("#output");
const copyButton = document.querySelector("#copy");

encryptButton.addEventListener("click", () => {
  const message = initialInput.value.toString();
  const key = keyInput.value.toString();

  output.value = encrypt(message, key);
});

decryptButton.addEventListener("click", () => {
  const message = initialInput.value.toString();
  const key = keyInput.value.toString();

  output.value = decrypt(message, key);
});

copyButton.addEventListener("click", () => {
  output.focus();
  output.select();
  output.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(output.value);
  // alert("Copied text to clipboard!");
  // document.execCommand("copy");
});
