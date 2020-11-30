function societyName(nameArrays) {
  nameArrays.sort();

  let firstChars = nameArrays.map(getFirstChar);
  let secretMessage = firstChars.join("");

  return secretMessage;
}

function getFirstChar(text) {
  return text[0];
}

let nameArrays = ["Miłosz", "Kasia", "Wiola", "Lena"];
console.log(societyName(nameArrays));