let numbers = [2,3,1,5,7,10,5,5,3,1];

numbers.sort((a, b) => a - b); 
/*When a - b is negative, it means a should come before b, so a will have a lower index than b. 
When it's positive, a should come after b, so b will have a lower index than a. */

console.log(numbers); //  [1, 1, 2, 3, 3, 5, 5, 5, 7, 10]


const people = [{name: "Spongebob", age: 30, GPA: 3.0 },
                {name: "Patrick", age: 31, GPA: 8.0 },
                {name: "Sandy", age: 22, GPA: 1.0 }];

people.sort((a,b) => a.age - b.age);


console.log(people);
/* output:
{name: 'Sandy', age: 22, GPA: 1}
{name: 'Spongebob', age: 30, GPA: 3}
{name: 'Patrick', age: 31, GPA: 8}
*/
