//Partiendo del ejercicio 1, haz que la raza (race), solo pueda ser Husky, Labrador, Chucho

interface Animal {
        name: string;
        canEat: boolean;
        canDrink: boolean;
        canSleep: boolean;
        canFly: boolean;
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
};

let doggie: Dog = {
        name: "Dugan",
        canDrink: true,
        canEat: true,
        canSleep: true,
        canFly: true,
        race: "Husky",
        age: 5,
};
