function xorEncrypt(input, key) {
  const symbols =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}:<>?,./";
  let encrypted = "";

  for (let i = 0; i < input.length; i++) {
    const charIndex = symbols.indexOf(input[i]);
    if (charIndex === -1) {
      throw new Error(`Invalid character: ${input[i]}`);
    }

    const keyIndex = symbols.indexOf(key[i % key.length]);
    const encryptedCharIndex = (charIndex ^ keyIndex) % symbols.length;
    encrypted += symbols[encryptedCharIndex];
  }

  return encrypted;
}

const initialInput = document.querySelector("#input");
const keyInput = document.querySelector("#key");
const submitButton = document.querySelector("#submit");
const output = document.querySelector("#output");
const copyButton = document.querySelector("#copy");
