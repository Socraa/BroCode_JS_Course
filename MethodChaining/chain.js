let username = window.prompt("Enter Name");


// Without Method Chaining
/*username = username.trim();
let firstLet = username.charAt(0);
firstLet = firstLet.toUpperCase();

let body = username.slice(1);
body = body.toLowerCase();
username = firstLet + body;

console.log(username);
*/

// With Method Chaining
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);


