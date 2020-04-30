const express = require('express');
const {pokemon} = require("../db/pokemonList");
const {getRandomPokemon} = require("../db/pokemonList");
const {deletePokemon} = require("../db/pokemonList");
const {getPokemon} = require("../db/pokemonList");
const {getAllPokemon} = require("../db/pokemonList");
const {updatePokemon} = require("../db/pokemonList");


const router = express.Router();

router.post('/pokemon', (req, res) => {

    const payload = pokemon;

    res.status(201).json(payload);
});

router.post("/lootbox", (req, res) => {

    const payload = getRandomPokemon(1);

    res.status(201).json(payload)
});

router.delete("/pokemon/:id", (req, res) => {

    const deleted = deletePokemon(req.params.id)
        if(deleted){
            res.status(204);
        } else {
            res.status(404);
        }
        res.send(204);
});


router.delete("/pokemon/:id", (req, res) =>{

    const deleted = deletePokemon(req.params.id);
    if(deleted){
        res.status(204);
    } else {
        res.status(404)
    }
    res.send();
});

router.get("/pokemon/:id", (req, res) => {

    const pokemon = getPokemon(req.params["id"]);

    if(!pokemon){
        res.status(404);
        res.send()
    } else {
        res.json(pokemon)
    }
});

router.get("/pokemon", (req, res) => {
    res.json(getAllPokemon());
});

router.put("pokemon/:id", (req, res) => {
   if(req.params.id !== req.body.id){
       res.status(409);
       res.send()
       return;
   }

   const updated = updatePokemon(req.body);
   if(updated){
       res.status(204);
   } else {
       res.status(404);
   }
   res.send();
});


module.exports = router;













