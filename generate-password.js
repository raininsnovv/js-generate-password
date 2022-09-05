function generatePassword(level, length, amount = 1) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let arrPassword = [];
  let newPassword = "";
  const digits = "0123456789";
  const symbols = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
  let str = alphabet + digits + symbols;
  for (let k = amount; k >= 1; k--) {
    for (let i = 0; i < length; i++) {
      if (level === "easy") {
        // я умею брать только первый символ из строки, а нужно взять один случайный символ :(
        newPassword += alphabet[Math.floor(Math.random() * alphabet.length)];
      } else if (level === "medium") {
        newPassword +=
          digits[Math.floor(Math.random() * digits.length)] +
          alphabet[Math.floor(Math.random() * alphabet.length)];
      } else if (level === "hard") {
        newPassword += str[Math.floor(Math.random() * str.length)];
      }
    }
    if (arrPassword.indexOf(newPassword) !== -1) {
      k--;
    } else {
      arrPassword.push(newPassword);
      newPassword = "";
    }
  }
  if (amount === 1) {
    return arrPassword[0];
  } else {
    return arrPassword;
  }
}

console.log(generatePassword("hard", 8, 3));
