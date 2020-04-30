import React from "react";
import {Link} from 'react-router-dom';


export class Collection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collection: null,
            error: null
        };
    }



    componentDidMount() {
        this.fetchCollection();
    }
 // Alot of code on this page borrowed from https://github.com/arcuri82/web_development_and_api_design/blob/master/les07/server_client_together/src/client/home.jsx
    async fetchCollection() {

        const url = "/api/collection";

        let response;
        let payload;

        try {
            response = await fetch(url);
            payload = await response.json();
        } catch (err) {
            //Network error: eg, wrong URL, no internet, etc.
            this.setState({
                error: "ERROR when retrieving pokemon collection: " + err,
                collection: null
            });
            return;
        }

        if (response.status === 200) {
            this.setState({
                error: null,
                collection: payload
            });
        } else {
            this.setState({
                error: "Issue with HTTP connection: status code " + response.status,
                collection: null
            });
        }
    }



    render() {

        let table;

        if (this.state.error !== null) {
            table = <p>{this.state.error}</p>
        } else if (this.state.collection === null || this.state.collection.length === 0) {
            table = <p>There is no collection registered in the database</p>
        } else {
            table = <div>
                <table className="allBooks">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.collection.map(b =>
                        <tr key={"key_" + b.id} className="oneBook" >
                            <td>{b.name}</td>
                            <td>{b.type}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        }

        return (
            <div>
                <div className={"action"}>
                    <Link to={"/"} className={"menu"}>
                        Home
                    </Link>
                </div>
                <h2>Collection</h2>
                {table}
            </div>
        );
    }
}