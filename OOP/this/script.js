const person1 ={

    firstName: "Sponge",
    lastName: "Bob",
    sayHello: function(){console.log("Hello! I am " + person1.firstName)}
}

const person2 = {
    firstName: "Jai",
    lastName: "Dyelle",
    sayHello: function(){console.log("Hello! I am " + this.firstName);}
}

person1.sayHello(); // Output: Hello! I am Sponge
person2.sayHello(); // Output: Hello! I am Jai