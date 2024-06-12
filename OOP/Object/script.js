const person = {
    firstName: "Spongebob", // example of properties
    lastName: "Squarepants",
    age: 25,
    isEmployed: true,
    sayHello: function(){ // Example of methods
        console.log("hello");
    },

    eat: function(){console.log("I'M FUCKING EATING!!!")},
}

const person1 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 27,
    isEmployed: false,
}

console.log(person1.age)
person.sayHello();
person.eat();

// Output: 27
// Output: hello
// Outpus: I'M FUCKING EATING!!!
