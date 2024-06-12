// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "cooking", "driving"],
//     address: { // this is a nested object
//         street: "123 Conch St.",
//         city: "Bikini Bottom",
//         country: "Red Sea",
//     }
// }

// console.log(person.fullName); //Output: Spongebob Squarepants
// console.log(person.age); //Output: 30
// console.log(person.isStudent); //Output: true
// console.log(person.hobbies[1]); //Output: cooking
// console.log(person.address.country); //Output: Red Sea


// for (const i in person.address){ // for loop
//     console.log(person.address[i]);
// }
// // Output: 123 Conch St.
// // Output: Bikini Bottom
// // Output: Red Sea


class person{ 
    constructor(name, age, job, ...address){
        this.name = name;
        this.age = age;
        this.job = job;
        this.address = new Address(...address); // taking the parameter of the constructor of the Address Class
    }
}


class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}


const person1 = new person("Jai", 19, "Nothing", "East 1", 
                                                 "Aliaga", 
                                                 "Philippines");

console.log(person1.address.street); // Output: East 1

