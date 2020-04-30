
   const pokemonList = [
    {
        name: "Bulbasaur",
        type: "Grass",
        id: 0
    },
    {
        name: "Charmander",
        type: "Fire",
        id: 1
    },
    {
        name: "Charizard",
        type: "Fire",
        id: 2
    },
    {
        name: "Squirtle",
        type: "Water",
        id: 3
    },
    {
        name: "Blastoise",
        type: "Water",
        id: 4
    },
    {
        name: "Metapod",
        type: "Grass",
        id: 5
    },
    {
        name: "Ekans",
        type: "Poison",
        id: 6
    },
    {
        name: "Pikachu",
        type: "Electricity",
        id: 7
    },
    {
        name: "Sandshrew",
        type: "Ground",
        id: 8
    },
    {
        name: "Nidoking",
        type: "Grass",
        id: 9
    },
    {
        name: "Nidoqueen",
        type: "Grass",
        id: 10
    },
    {
        name: "Psyduck",
        type: "Psychic",
        id: 11
    },
    {
        name: "Abra",
        type: "Psychic",
        id: 12
    },
    {
        name: "Kadabra",
        type: "Psychic",
        id: 13
    },
    {
        name: "Alakazam",
        type: "Psychic",
        id: 14
    },
    {
        name: "Mewtwo",
        type: "Psychic",
        id: 15
    },
    {
        name: "Gengar",
        type: "Ghost",
        id: 16
    },
    {
        name: "Mr. Mime",
        type: "Psychic",
        id: 17
    },
    {
        name: "Dratini",
        type: "Dragon",
        id: 18
    },
    {
        name: "MissingNo",
        type: "Unknown",
        id: 19
    }
];


function getRandomPokemon(numberOfPokemon) {
    if(numberOfPokemon < 1){
        throw "Invalid number of requested quizzes: " + numberOfPokemon;
    }

    if(numberOfPokemon > pokemonList.length){
        throw "Too many quizzes";
    }

    const selection = Array(numberOfPokemon);
    let i = 0;

    while (i < numberOfPokemon){
        const k = Math.floor(pokemonList.length * Math.random());
        if(selection.includes(k)){
            continue;
        }

        selection[i] = k;
        i++;
    }

    return Array.from(selection).map(e => pokemonList[e]);

}



function deletePokemon(id){
    return pokemonList.splice(id, 1);
}

function getPokemon(inputId){
    return pokemonList[inputId]
}

function getAllPokemon(){
    return Array.from(pokemonList.values());
}

function updatePokemon(inputPokemon) {
    if(!pokemonList.includes(inputPokemon.id)){
        return false;
    }
    pokemonList.name = inputPokemon.name;
    pokemonList.type = inputPokemon.type;

   }


module.exports = {pokemon: pokemonList, getRandomPokemon, deletePokemon, getPokemon, getAllPokemon, updatePokemon}





