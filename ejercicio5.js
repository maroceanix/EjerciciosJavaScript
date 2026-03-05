/*
Ejercicio 5, maps
Sigue los siguientes pasos:

Crea un mapa llamado myMap
Añade los siguientes key-valor al map
Clave	Valor
moroso	user (object)
agarrado	user (object)
generoso	user2 (object)
funcion	findAnimal (function)
color	color (string)
Muestra por consola todo el map
Muestra por consola el key moroso
Comprueba si existe la key hola
Muestra por consola el tamaño total del map
Recorre el map con un forEach
Elimina el elemento agarrado del map

*/ 

const mapaMar= new Map();

mapaMar.set("moroso", {nombre: "user"})
mapaMar.set("agarrado", {nombre: "user"})
mapaMar.set("moroso", {nombre: "user2"})
mapaMar.set("funcion", (findAnimal) =>  'Encuentro animal');
mapaMar.set("color", "rosa")

//Muestra por consola todo el map
console.log(mapaMar);
//Muestra por consola el key moroso
console.log(mapaMar.get("moroso"));

//Comprueba si existe la key hola
if(mapaMar.has("hola")){
  console.log("Si tiene hola");
}
//Muestra por consola el tamaño total del map
console.log(mapaMar.size);

//Recorre el map con un forEach
mapaMar.forEach((valor, clave)=>{
console.log(`La clave es: ${clave}`);
console.log(`El nombre asociado es: ${valor.nombre}`);
console.log("\n");  
});

//Elimina el elemento agarrado del map
mapaMar.delete("agarrado");

//Limpia el mapa por completo
mapaMar.clear();