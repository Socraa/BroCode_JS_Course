class Animal{ // SuperClass

    alive = true; // You can create an instance inside the class too

    eat(){
        console.log("this " + this.name + " is eating");
    }

    sleep(){
        console.log("This " + this.name + " is sleeping");
    }


}

class Rabbit extends Animal{ // SubClass
    name = "rabbit";
}

class Fish extends Animal{ // SubClass
    name = "Fish";
}

class Hawk extends Animal{ // SubClass
    name = "Hawk";

    fly(distance){ // Can only be access by the Hawk class since it's not extended to others
        console.log("I CAN FUCKING FLY WITH THE DISTANCE OF " + distance);
    }
}



const rabbit = new Rabbit();
rabbit.sleep(); // Output: This rabbit is sleeping

const halk1 = new Hawk();
halk1.fly(999); // Output: I CAN FUCKING FLY WITH THE DISTANCE OF 999