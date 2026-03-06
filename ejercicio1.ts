/*Crea un objeto bird que tenga los siguientes datos: name, canEat, canDrink, canSleep, canFly
Crea un objero dog que tenga los mismos datos que pájaro, pero que a demás tenga: race, age
Crea los tipos/interfaces necesarios para poder trabajar con estos datos en TypeScript. */

interface Animal {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
}

interface Bird extends Animal {}

interface Dog extends Animal {
  race: string;
  age: number;
}

let bird: Bird = {
  name: "cacatua",
  canDrink: true,
  canEat: true,
  canSleep: true,
  canFly: true,
};

let doggie: Dog = {
  name: "Dugan",
  canDrink: true,
  canEat: true,
  canSleep: true,
  canFly: true,
  race: "Border Collie",
  age: 5,
};
