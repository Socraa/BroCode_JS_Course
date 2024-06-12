class product{
    constructor(name, price){ // Constructor
        this.name = name;
        this.price = price; // properties
    }

    displayProduct(){ // This is a fucntion/method. You don't need to write "function" keyword if you're in a class

        console.log("Product: " + this.name + " / Price: " + this.price);
    }

    tax(theTax){
        return this.price + theTax;
    }
}

const taxx = 5;


const product1 = new product("Tide", 45);
const product2 = new product("Zeb", 20);


console.log(product1.name); // Output: Tide
product1.displayProduct(); // Output: Product: Tide / Price: 45

const totaltax = product1.tax(taxx);
console.log("Total including tax: $" + totaltax); //Output: Total including tax: $50