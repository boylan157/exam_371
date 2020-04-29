import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {PokemonList} from "./pokemonList";
import {Home} from "./home";
import {LootboxGame} from "./lootboxGame";

const notFound = () => {
    return(
        <div>
            <h2>NOT FOUND: 404</h2>
            <p>
                Error: the page you requested is not available
            </p>
        </div>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path={"/lootboxGame"} component={LootboxGame}/>
                    <Route exact path="/pokemonList" component={PokemonList}/>
                    <Route exact path="/" component={Home}/>
                    <Route component={notFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));


