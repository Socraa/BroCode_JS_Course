class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    life(died){
        console.log("Fuck life " + "I'll die at " + died );
    }
}

class Dog extends Animal{

    constructor(name, age, runSpeed){
        super(name, age); // The super keyword is needed to access the constructor of the superClass
        this.runSpeed = runSpeed;

    }

    death(){
        console.log("Life is Meaningful");
        super.life(78); // it will also print what is in the life(died) method of the SuperClass
    }

    
}

const dog1 = new Dog("Diogenes", 54, 2);

console.log(dog1.name); // Output: Diogenes
dog1.death(); // Output: Life is Meaningful
              // Output: Fuck life I'll die at 78
