/*Ejercicio 2, Hoisting
Que devuelve por consola cada uno de los siguientes console.log

console.log(a);
var a = "hola";

->Devuelve undefined
-------
console.log(b);
let b = "hola";
->devuelve un error que dice no está inicializada
----
console.log(c);
const c = "hola";
->devuelve un error que dice no está inicializada
------
sayHi();

function sayHi() {
  console.log("Hola desde sayHi!");
}
->devuelve "Hola desde sayHi!" porque da igual que llames a un méodo antes de que se cree, no esta indefinido
----
function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye(); 
->devuelve "Adios desde sayBye!" porque da igual que llames a un méodo antes o después de que se cree, no esta indefinido
*/