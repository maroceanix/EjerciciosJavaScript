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
