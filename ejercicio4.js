const toUpperCase = (str) => {
  let arr = [];
  let text = "";
  str = str.toLowerCase();
  for (const key in str) {
    if (
      (str.charCodeAt(key) >= 97 && str.charCodeAt(key) <= 122) ||
      str.charCodeAt(key) === 32
    ) {
      str.charCodeAt(key) === 32
        ? arr.push(str.charCodeAt(key))
        : arr.push(str.charCodeAt(key) - 32);
      text += String.fromCharCode(arr[key]);
    } else {
      return (text = "Only text a-z & A-Z");
    }
  }
  return text;
};

console.log(toUpperCase("hola")); // "HOLA"
console.log(toUpperCase("anita lava la tina")); // "ANITA LAVA LA TINA"
console.log(toUpperCase("Hola")); // "HOLA"
console.log(toUpperCase("mi telefono es: 3122179778"));
