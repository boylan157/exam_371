import React from "react";
import {Link} from "react-router-dom";

export class Home extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>Pokemon Game</h2>

                <p className={"welcome-text"}>
                    Welcome to Pokemon Game
                </p>

                <div className={"action"}>
                    <Link to={"/pokemonList"} className={"menu"}>
                        See Pokemon
                    </Link>
                    <Link to={"/lootboxGame"} className={"menu"}>
                        Open lootbox!
                    </Link>
                </div>
            </div>
        )
    }
}