const str = "  Hola world who are you      murcielago ";
const lengthOfLastWord = () => {
  countStr = str.trim().split(" ");
  endWord = countStr[countStr.length - 1];
  let count = 0;
  for (const key in endWord) {
    count += 1;
  }
  return `The last word is: "${endWord}" and has ${count} characters`;
};

console.log(lengthOfLastWord(str));

// Esta solucion la encontre en internet me gustaria que me explicaran como funciona,
// no la entiendo de un todo.
var lengthOfLastWordOther = function (s) {
  return `The last word is: "${endWord}" and has
  ${
    s
      .split(" ")
      .filter((a) => a)
      .slice(-1)[0].length
  } characters`;
};
console.log(lengthOfLastWordOther(str));
