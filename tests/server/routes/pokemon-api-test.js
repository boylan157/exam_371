const request = require('supertest');
const {app} = require('../../../src/server/app');
const pokemon = require("../../../src/server/db/pokemon")


test("Test create pokemon list", async () =>{

    const response = await request(app).post('/api/pokemon');

    expect(response.statusCode).toBe(201);
    expect(response.body.length).toBe(20);
});


test("retrieve every single pokemon", async () => {

    const responseAll = await request(app).get("/api/pokemon")
    expect(responseAll.statusCode).toBe(200)

    const pokemons = responseAll.body;
    expect(pokemons.length).toBe(20)

    for(let i=0; i<pokemons.length; i++){

        const res = await request(app).get('/api/pokemon/'+pokemons[i].id);
        const pokemon = res.body;

        expect(pokemon.name).toBe(pokemons[i].name)
    }
});

test("Delete pokemon", async () => {

    let responseAll = await request(app).get("/api/pokemon")
    expect(responseAll.statusCode).toBe(200)

    const pokemons = responseAll.body;
    expect(pokemons.length).toBe(20)

    let res = await request(app).delete('/api/pokemon/'+pokemons[0].id);
    expect(res.statusCode).toBe(204);

    responseAll = await request(app).get("/api/pokemon");
    expect(responseAll.body.length).toBe(19);

    res = await request(app).delete('/api/pokemon/'+pokemons[1].id);
    expect(res.statusCode).toBe(204);

    responseAll = await request(app).get("/api/pokemon");
    expect(responseAll.body.length).toBe(18);
});



















