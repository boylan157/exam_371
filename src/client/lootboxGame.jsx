import React from "react";
import {Link} from "react-router-dom";

export class LootboxGame extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            pokemon: null,
            error: null
        }
    };
/*
    componentDidMount() {
        this.showRandomPokemon()
    }
*/
    showRandomPokemon = async () =>  {
        const pokemon = await this.getRandomPokemon(1);

        this.setState(
            !pokemon
            ? {error: "Error when connecting to server"}
            : {
                error: null,
                pokemon: pokemon,
                display: false
                }
        )
    };

    getRandomPokemon = async numberOfPokemon => {
        if(numberOfPokemon < 1){
            throw "Invalid number of pokemon " + numberOfPokemon;
        }

        const url = "/api/lootbox";
        let response;
        let payload;

        try{
            response = await fetch(url, {method: "post"});
            payload = await  response.json();
        } catch (err) {
            return null;
        }

        if(response.status !== 201){
            return null
        }
        return payload
    };




    render() {
        if(this.state.error){
            return <h2>{this.state.error}</h2>;
        }

        if(!this.state.pokemon){
            return <div>
                <div className={"action"}>
                    <Link to={"/"} className={"menu"}>
                        Home
                    </Link>
                </div>
                <button onClick={this.showRandomPokemon}>Open lootbox!</button>
            </div>
        }

        const pokemon = this.state.pokemon;


   return (

       <div>
           <div className={"action"}>
               <Link to={"/"}>
                   Home
               </Link>
           </div>
           <h1>This Pokemon dropped!</h1>
           <p className={"pokemon-name"}>{pokemon[0].name}</p>
           <div className={"pokemon-type"}>Type: {pokemon[0].type}</div>
           <button onClick={this.showRandomPokemon}>Reroll</button>
           <Link to={"/collection"}>
               Add to collection
           </Link>
       </div>


       );
    }
}













