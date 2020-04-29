import React from "react";
import {Link} from "react-router-dom";

export class PokemonList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            pokemon: null,
            error: null,
            displayPokemon: false
        }
    }

    componentDidMount() {
        this.showPokemon();
    }

    showPokemon = async () => {
        const pokemon = await this.getPokemon();

        this.setState(
            !pokemon ? {error: "Error when connecting to server"}
            : {
                error: null,
                pokemon: pokemon
                }
        )
    };

    getPokemon = async () => {

        const url = "/api/pokemon";
        let response;
        let payload;

        try {
            response = await fetch(url, {method: "post"});
            payload = await response.json();
        } catch (err) {
            return null
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
            return <h2>Loading..</h2>
        }

        const pokemon = this.state.pokemon;

        return (
            <div>
                <h1>List of available pokemon!</h1>
                <div className={"action"}>
                    <Link to={"/"} className={"menu"}>
                        Home
                    </Link>
                </div>
                <div className={"menuDiv"}>
                    <p className={"pokemon-name"}>{pokemon[0].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[0].type}</div>
                    <p className={"pokemon-name"}>{pokemon[1].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[1].type}</div>
                    <p className={"pokemon-name"}>{pokemon[2].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[2].type}</div>
                    <p className={"pokemon-name"}>{pokemon[3].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[3].type}</div>
                    <p className={"pokemon-name"}>{pokemon[4].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[4].type}</div>
                    <p className={"pokemon-name"}>{pokemon[5].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[5].type}</div>
                    <p className={"pokemon-name"}>{pokemon[6].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[6].type}</div>
                    <p className={"pokemon-name"}>{pokemon[7].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[7].type}</div>
                    <p className={"pokemon-name"}>{pokemon[8].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[8].type}</div>
                    <p className={"pokemon-name"}>{pokemon[9].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[9].type}</div>
                    <p className={"pokemon-name"}>{pokemon[10].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[10].type}</div>
                    <p className={"pokemon-name"}>{pokemon[11].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[11].type}</div>
                    <p className={"pokemon-name"}>{pokemon[12].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[12].type}</div>
                    <p className={"pokemon-name"}>{pokemon[13].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[13].type}</div>
                    <p className={"pokemon-name"}>{pokemon[14].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[14].type}</div>
                    <p className={"pokemon-name"}>{pokemon[15].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[15].type}</div>
                    <p className={"pokemon-name"}>{pokemon[16].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[16].type}</div>
                    <p className={"pokemon-name"}>{pokemon[17].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[17].type}</div>
                    <p className={"pokemon-name"}>{pokemon[18].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[18].type}</div>
                    <p className={"pokemon-name"}>{pokemon[19].name}</p>
                    <div className={"pokemon-type"}>Type: {pokemon[19].type}</div>
                </div>
            </div>

    )
    }
}





























