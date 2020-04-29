const {getRandomPokemon} = require("../../../src/server/db/pokemon");


test("Test invalid n", () =>{
    expect(() => getRandomPokemon(-1)).toThrow();
    expect(() => getRandomPokemon(0)).toThrow();
    expect(() => getRandomPokemon(10000)).toThrow();
});

test("test get 1", () => {
    const pokemon = getRandomPokemon(1);

    expect(pokemon.length).toBe(1);
});

test("Test get 2", () => {

    for(let i=0; i<100; i++) {
        const pokemon = getRandomPokemon(2);

        expect(pokemon.length).toBe(2);
        expect(pokemon[0].name).not.toBe(pokemon[1].name);
    }
});