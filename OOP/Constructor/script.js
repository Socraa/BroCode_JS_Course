function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log("I drive a " + this.model);}

}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Honda", "Civic", 2004, "grey");

console.log(car1.make);
console.log(car1.model);
car1.drive();