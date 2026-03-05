/*Ejercicio 4, refactoriza el código
Dado los siguientes códigos, refactorízalos como consideres, si consideras que está bien, explica el motivo.

Primer código
Tenemos una función que saca el nombre completo del usuario con el nombre y apellido*/

const usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};

console.log(nombreUsuario(usuario));

function nombreUsuario(user) {
  const nombrCompleto = "Me llamo " + user.nombre + " " + user.apellido;

  return nombrCompleto;
}

//Honestamente de aquí solo cambiaría que fuese cnst ya que el valor no va a cambiar nunca


/*Segundo código
Tenemos una función que calcula el salario anual y el nombre del usuario
const user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};
const MESES=12;
function userData(user) {
  const annualSalary = user.salary * MESES;
  const fullName = `${user.name} ${user.last}`;
  
  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

console.log(userData(user));
*/

//Del segundo código solo cambiaría 

/*Tercer código
Si el usuario tiene 30 años y no es español, recibirá una ayuda del gobierno de */
const user = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

const EDAD_APTA_PAGA=30;
function esExtrangero(user) {
  if (user.nationality != "España") {
    if (user.age== EDAD_APTA_PAGA) {
      return "Apto para la ayuda del gobierno";
    } else {
      return "No es apto para la ayuda del gobierno";
    }
  } else {
    return "No es apto para la ayuda del gobierno";
  }
}

console.log(esExtrangero(user));

//he añadido una constante para la edad.
