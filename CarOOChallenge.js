class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep.";
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

let myFirstVehicle = new Vehicle ("Ford", "Bronco", 1995);
let mySecondVehicle = new Vehicle ("Chrysler", "300", 2007);

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "Vroom!";
    }
}

let myFirstMotorcycle = new Motorcycle ("Kawasaki", "Ninja", 2005);

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)){
        return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
        return "Sorry, the garage is full.";
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added to garage";
    }
}