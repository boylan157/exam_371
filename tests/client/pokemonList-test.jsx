const React = require('react');
const { mount } = require('enzyme');
import {BrowserRouter} from 'react-router-dom';
const {PokemonList} = require("../../src/client/pokemonList");
import {asyncCheckCondition, overrideFetch} from "../mytest-utils";
const {app} = require("../../src/server/app");

function checkIfPokemonListIsDisplayed(driver) {

    const pokemonName = driver.find('.pokemon-name');


    const pokemonType = driver.find('.pokemon-type');


    return pokemonName.length === 20 && pokemonType.length === 20;
}

async function waitForListDisplayed(driver){
    const displayed = await asyncCheckCondition( () =>{
        driver.update();
        return checkIfPokemonListIsDisplayed(driver);
    }, 2000, 200)

    return displayed
}

test("Test rendered menu", async ()=> {

    overrideFetch(app);

    const driver  = mount(
        <BrowserRouter>
            <PokemonList/>
        </BrowserRouter>);

    const displayed = await waitForListDisplayed(driver)
    expect(displayed).toEqual(true);
});