let max = 100;
let min = 1;

let random = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(random);

let attempt = 10;
let tryy = true;
let guess;

while(tryy){

    guess = window.prompt(`Select a Random Number From ${min} to ${max}`);
    guess = Number(guess);


    if(isNaN(guess)){
        window.alert(`Please Enter a Number!!`);

    }else if(guess < min || guess > max){
        window.alert(`Please Enter a Number From ${min} to ${max}`);
    }else{
        if(attempt == 0){
            window.alert(`You Lose!!!!`);
            break;
        }else{
            if(guess > random){
                attempt--;
                window.alert(`Your Number is Too High. You only have ${attempt} attempts left!!`);
                if(attempt == 0){
                    window.alert(`You Lose!!!!`);
                    break;
                }
            }else if(guess < random){
                attempt--;
                window.alert(`Your Number is Too Low. You only have ${attempt} attempts left!!`);
                if(attempt == 0){
                    window.alert(`You Lose!!!!`);
                    break;
                }
            }else if (guess == random){
                window.alert(`You're Correct`);
                break;
            }
        }
    
    }
}


