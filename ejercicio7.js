const validEmail = (email) => {
  expreg = /^([\w]+)\@([\w]+)\.([\w]){2,4}$/;
  return expreg.test(email);
};

console.log(validEmail("apuello1025@gmail.com")); // true
console.log(validEmail("andrespuello@makeitreal.camp")); // true
console.log(validEmail("apuello1025gmail.com")); // false
console.log(validEmail("apuello1025@gmailcom")); // false
