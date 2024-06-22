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

            const pokemonName = document.querySelector('#pokemonName').value.toLowerCase();


            const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName);

            if(!response.ok){
                throw new Error("Fucking error");
            }

            const data = await response.json();
            const pokemonSprite = data.sprites.front_default;
            const imgElement = document.querySelector('#pokemonSprite');

            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
            console.log(data);

        }catch(error){
            console.error(error);
        }
    }