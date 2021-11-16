const validHexaColor = (color) => {
  expreg = /^#(?:[0-9a-f]{3}){1,2}$/i;
  return expreg.test(color);
};
console.log(validHexaColor("#f21")); //true
console.log(validHexaColor("#FFF211")); //true
console.log(validHexaColor("221")); //false
console.log(validHexaColor("222211")); //true
