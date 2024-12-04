const charset = "0123456789abcdef";

function encrypt(message, key) {
  let encrypted = "";
  let hexed_msg = "";
  let hexed_key = "";

  for (let i = 0; i < message.length; i++) {
    const hexCode = message[i].charCodeAt(0).toString(16);
    hexed_msg += hexCode;
    // console.log(hexCode);
  }
  console.log("hexed_msg:", hexed_msg);

  for (let i = 0; i < key.length; i++) {
    const hexCode = key[i].charCodeAt(0).toString(16);
    hexed_key += hexCode;
    // console.log(hexCode);
  }
  console.log("hexed_key:", hexed_key);

  encrypted = xorEncrypt(hexed_msg, hexed_key, charset);

  return encrypted;
}

function xorEncrypt(message, key, charset) {
  let encrypted = "";
  for (let i = 0; i < message.length; i++) {
    const charIndex = charset.indexOf(message[i]);
    const keyIndex = charset.indexOf(key[i % key.length]);
    if (charIndex === -1 || keyIndex === -1) {
      throw new Error("Character not in charset");
    }
    const encryptedIndex = (charIndex ^ keyIndex) % charset.length;
    encrypted += charset[encryptedIndex];
  }
  return encrypted;
}

const isHexadecimal = (str) => /^[A-F0-9]+$/i.test(str);

export { encrypt };
