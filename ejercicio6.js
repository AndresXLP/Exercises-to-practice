const validDate = (str) => {
  expreg = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
  return expreg.test(str);
};
/*
(0?[1-9][12][0-9]3[01]) Día: 01 al 31
Esta primer grupo valida el día; puede comenzar con un 0 segido de un numero de 1 a 9,
si no comienza con 0 debe ir un 1 o 2 seguido un numero de 1 a 9,
si no es 1 o 2 debe ser un 3 seguido de un numero de 0 o 1.

(0?[1-9]|1[012]) Mes: 01 al 12
Este segundo girpo valida el mes; puede comenza con un 0 seguido de un numer de 1 a 9,
si no comienza con 0 debe ir 1 segido de un numero que debe ser 0,1,2(uno de los 3)

\d{4} Año:
Este ultimo solo valida que sea un digito del 0 al 9 y debe tener 4 digitos.
*/
console.log(validDate("31/01/1992"));
