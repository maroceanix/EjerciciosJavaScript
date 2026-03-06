/*Partiendo del ejercicio anterior, crea un nuevo objeto llamado cat que solamente tenga name, color, canSleep
Partiendo del ejercicio anterior, crea un nuevo objeto llamado Snake que solamente tenga canEat, canDrink, canSleep
*/

interface Animal {
        name: string;
        canEat: boolean;
        canDrink: boolean;
        canSleep: boolean;
        canFly: boolean;
        color: string;
}

type typeRace = "Husky" | "Labrador" | "Chucho";
interface Bird extends Animal {}

interface Dog extends Animal {
        race: typeRace;
        age: number;
}

let bird: Bird = {
        name: "cacatua",
        canDrink: true,
        canEat: true,
        canSleep: true,
        canFly: true,
        color: "amarillo",
};

let doggie: Dog = {
        name: "Dugan",
        canDrink: true,
        canEat: true,
        canSleep: true,
        canFly: true,
        race: "Husky",
        age: 5,
        color: "blanco/negro",
};

type catType = Pick<Animal, "name" | "color" | "canSleep">;
type snakeType = Pick<Animal, "canEat" | "canDrink" | "canSleep">;
let cat: catType = {
        name: "Niko",
        color: "Naranja",
        canSleep: true,
};

let snake: snakeType = {
        canDrink: true,
        canEat: true,
        canSleep: true,
};
