class mathUtil{
    static PI = 3.14159;


    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
         return this.PI * radius * radius;
    }

}

console.log(mathUtil.getDiameter(10)); // Output: 20
console.log(mathUtil.getCircumference(10)); // Output: 62.8318
console.log(mathUtil.getArea(20)); // Output: 1256.636


class user{

    static userCount = 0;

    constructor(username){ // Each user created; it will add 1 to the userCount
        this.username = username;
        user.userCount++;
    }

    static getUserCount(){
        console.log("There are " + user.userCount + " users");
    }

    sayHello(){
        console.log("Hello, my name is " + this.username );
    }
}

const user1 = new user("Jai"); 
const user2 = new user("Dyelle"); 
const user3 = new user("Socra"); 

console.log(user1.username); // Output: Jai

user1.sayHello(); //Output: Hello, my name is Jai
user2.sayHello();
user3.sayHello();


console.log(user.userCount); // Output: 3 (since there is 3 users)
user.getUserCount(); //Output: There are 3 users