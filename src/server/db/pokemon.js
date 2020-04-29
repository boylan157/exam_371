
   const pokemon = [
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

    if(numberOfPokemon > pokemon.length){
        throw "Too many quizzes";
    }

    const selection = Array(numberOfPokemon);
    let i = 0;

    while (i < numberOfPokemon){
        const k = Math.floor(pokemon.length * Math.random());
        if(selection.includes(k)){
            continue;
        }

        selection[i] = k;
        i++;
    }

    return Array.from(selection).map(e => pokemon[e]);

}



function deletePokemon(id){
    return pokemon.splice(id, 1);
}

function getPokemon(inputId){
    return pokemon[inputId]
}

function getAllPokemon(){
    return Array.from(pokemon.values());
}

function updatePokemon(inputPokemon) {
    if(!pokemon.includes(inputPokemon.id)){
        return false;
    }
    pokemon.name = inputPokemon.name;
    pokemon.type = inputPokemon.type;

   }


module.exports = {pokemon, getRandomPokemon, deletePokemon, getPokemon, getAllPokemon, updatePokemon}





