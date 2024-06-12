/*const fullname = "Jai Dyelle";

let firstName = fullname.slice(0, 3);
let lastName = fullname.slice(4, 10);

console.log(firstName);
console.log(lastName);
*/

/*const hello = "Hello World!";

world = hello.slice(-6);

console.log(world);
*/

let fullName = "Jai Dyelle";

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf("D"));

console.log(lastName);