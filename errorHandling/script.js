// try{
//     console.log(x);
// }catch(error){
//     console.error("hello"); // It's better to use console.error if you're handling an error, making it more visible
// }finally{
//     console.log("This always executes");
// }
// console.log("hi");

try{
    const dividend = window.prompt("Enter a Dividend");
    const divisor = window.prompt("Enter a divisor:");

    if(divisor == 0){
        throw new Error("no zero"); // a statement used to manually throw an error.
    }

    if (dividend || divisor == String){
        throw new Error("String");
    }

    const result = dividend / divisor;
    console.log(result);

}catch(error){
    console.error(error);
}