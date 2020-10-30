import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class Ships extends React.Component {
    state = {
        shipLoad: []
    }

loadShips = () => {
    const apiUrl = "https://api.spacexdata.com/v3/ships";
    axios.get(apiUrl).then((response) => {
        this.setState({ shipLoad: response.data});

    })
}

    render() {
        const shipList = this.state.shipLoad.map((ship) => {
        return <p>{ship.ship_name}</p>
        })
        return <div>
           
            <h3>Clique para ver nossas Naves:</h3>
            <p>{shipList}</p>
            <button onClick={this.loadShips}>Carregar Naves</button>
            
        </div>

    }
}
export default Ships;