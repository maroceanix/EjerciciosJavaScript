/*¿Qué salida tendrán los siguientes console.log?*/

/*Comparaciones con booleanos
console.log(false + false);
console.log(false + true);
console.log(true + true);
L salida es 0 1 2*/

/*Comparaciones con arrays
console.log([] === []);
console.log([] + []);
console.log([1, 2] + [3, 4]);
console.log([1] + 1);
console.log([1] - 1);
La salida es false(porque js compara objetos por referencia y no por valor)   1,23,4 11 0
*/

/* Comparaciones con objetos
console.log({} + {});
console.log({} === {});
console.log([] === {});

La salida es [object Object][object Object](esto se debe a que javas llama al toString de los objetos, entonces cuando hacess + de dos cadenas de texto, se concatenan) false false
*/

/* Comparaciones especiales
console.log(null + 1);
console.log(undefined + 1);
console.log(null == 0);
console.log(null <= 0);
console.log(undefined == null);

La salida por consola es 1 NaN(is not a number, ya que está sumando un valor de tipo undefined con uno de tipo int) false true true 
*/
/* Operaciones con NaN
console.log(NaN + 1);
console.log(NaN == NaN);
console.log(NaN === NaN);

La salida es NaN(sigue sin ser un número) false false
*/
