import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {PokemonList} from "./pokemonList";
import {Home} from "./home";
import {LootboxGame} from "./lootboxGame";
import Login from "./login";
import SignUp from "./signup";
import HeaderBar from "./headerbar";
import {Collection} from "./collection";


// code extended from https://github.com/arcuri82/web_development_and_api_design/blob/master/exercise-solutions/quiz-game/part-10/src/client/index.jsx
class App extends React.Component {

    constructor(props) {
        super(props);



        this.state = {
            user: null
        };
    }


    componentDidMount() {
        this.fetchAndUpdateUserInfo();
    }


    fetchAndUpdateUserInfo = async () => {

        const url = "/api/user";

        let response;

        try {
            response = await fetch(url, {
                method: "get"
            });
        } catch (err) {
            this.setState({errorMsg: "Failed to connect to server: " + err});
            return;
        }

        if (response.status === 401) {
            //that is ok
            this.updateLoggedInUser(null);
            return;
        }

        if (response.status !== 200) {

        } else {
            const payload = await response.json();
            this.updateLoggedInUser(payload);
        }
    };

    updateLoggedInUser = (user) => {
        this.setState({user: user});
    };


    notFound() {
        return (
            <div>
                <h2>NOT FOUND: 404</h2>
                <p>
                    ERROR: the page you requested in not available.
                </p>
            </div>
        );
    };


    render() {


        const id = this.state.user ? this.state.user.id : null;

        return (
            <BrowserRouter>
                <div>
                    <HeaderBar userId={id}
                               updateLoggedInUser={this.updateLoggedInUser}/>
                    <Switch>
                        <Route exact path="/lootboxGame"
                               render={props => <LootboxGame {...props}
                                                       user={this.state.user}
                                                       updateLoggedInUser={this.updateLoggedInUser}
                                                       fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo}
                               />}/>
                        <Route exact path="/pokemonList"
                               render={props => <PokemonList {...props}
                                                             user={this.state.user}
                                                             updateLoggedInUser={this.updateLoggedInUser}
                                                             fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo}
                               />}/>
                        <Route exact path="/login"
                               render={props => <Login {...props}
                                                       fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo}/>}/>
                        <Route exact path="/signup"
                               render={props => <SignUp {...props}
                                                        fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo}/>}/>
                        <Route exact path="/"
                               render={props => <Home {...props}
                                                      user={this.state.user}
                                                      fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo}/>}/>
                        <Route exact path="/collection"
                               render={props => <Collection {...props}
                                                      user={this.state.user}
                                                      fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo}/>}/>
                        <Route component={this.notFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));


