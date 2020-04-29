import React from "react";
import { Link } from "react-router-dom";


export class Collection extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h2>Your collection of pokemon!</h2>
                <div className={"action"}>
                    <Link to={"/"} className={"menu"}>
                        Home
                    </Link>
                </div>
            </div>
        )
    }
}