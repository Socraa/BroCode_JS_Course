// fetch("https://pokeapi.co/api/v2/pokemon/exploud")
//     .then(response => response.json()) // response is like the information of the url. response.json is like turning that url info into an object, it's like parsing it
//     .then(data => console.log(data.name)) // data(parameter) is like what is in that information, can access since the raw files became object
//     .catch(error => console.error(error));


    // fetch("https://pokeapi.co/api/v2/pokemon/exploud")
    // .then(response => {

    //     if(!response.ok){
    //         throw new Error("Can't fucking find shit");
    //     }
    //     return response.json();

    // })

    // .then(data => console.log(data.name)) 
    // .catch(error => console.error(error));


    // Using Async Fucntion

    async function fetchData(){
        try{

            const response = await fetch("https://pokeapi.co/api/v2/pokemon/snorlax");

        }catch(error){
            console.error(error);
        }
    }