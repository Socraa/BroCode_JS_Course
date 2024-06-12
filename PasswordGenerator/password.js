function generatePassword(lenght, lowerCase, upperCase, numbers, symbols){

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "1234567890";
    const symbol = "!@#$%^&*()_+-=;:"

    let allowedChars = " ";
    let password = " ";

    allowedChars += lowerCase ? lower : "";
    allowedChars += upperCase ? upper : "";
    allowedChars += numbers ? number : "";
    allowedChars += symbols ? symbol : "";

    for (i = 0; i < lenght; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }



    return password;
}

const passwordLenght = 12;
const passwordLowerCase = true;
const passwordUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLenght, passwordLowerCase, passwordUppercase, includeNumbers, includeSymbols);

console.log(`Password: ${password}`);