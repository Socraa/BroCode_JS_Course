const age = [16,23,53,12,3,5];

const adults = age.filter(isOld);
console.log(adults);

function isOld(element){
    return element >= 18;
}