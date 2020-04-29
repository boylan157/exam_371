import React from "react";
import {Link} from "react-router-dom";

export class Home extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        if(this.props.user){
            this.props.fetchAndUpdateUserInfo()
        }
    }

    render() {
        const user = this.props.user;
        const loggedIn = user !== null && user !== undefined;

        return(
            <div>

                <h2 className={"welcome-text"}>
                    Welcome
                </h2>

                <div className={"action"}>
                    <Link to={"/pokemon"} className={"button"}>
                        See list of all Pokemon
                    </Link>

                    {loggedIn ? (
                        <div>
                            <Link to={"/lootboxGame"} className={"button"}>
                                Open Lootbox
                            </Link>
                            <Link to={"/collection"} className={"button"}>
                                Your collection
                            </Link>
                            <div className="action">
                                <p>Victories: {user.victories}</p>
                                <p>Defeats: {user.defeats}</p>
                            </div>
                        </div>
                    ) : (
                        <p>You need to log-in to start playing!</p>
                    )}
                </div>
            </div>
        )
    }
}