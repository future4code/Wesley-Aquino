import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class Ships extends React.Component {
    state = {
        shipLoad: null
    }

loadShips = () => {
    const apiUrl = "https://api.spacexdata.com/v3/ships";
    axios.get(apiUrl).then((response) => {
        console.log("resposta", response)
        this.setState({ shipLoad: response.data.ship_name});
    })
}

    render() {
        return <div>
            <button onClick={this.loadShips}>Carregar Naves</button>
            {this.state.shipLoad && (
                <div>
                    <p>Nome: {this.state.shipLoad.name}</p>
                </div>
            )}
            <h2>Nossas Naves</h2>
            
        </div>

    }
}
export default Ships;