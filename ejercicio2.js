const capitalizar = (str) => {
  return str
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
};
console.log(capitalizar("hola mundo voy por ti!")); // "Hola Mundo"
