
import './App.css';
import React from 'react';
import Home from './components/Home';
import Ships from './components/Ships';
import styled from 'styled-components';


const AppContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
font-size: 3vw;
`

const MissionButton = styled.button`
height: 5vw;
margin: 5vw;
font-size: 2vw;
color: blue;
`

const ShipsButton = styled.button`
height: 5vw;
margin: 5vw;
font-size: 2vw;
color: green;
`


class App extends React.Component {
  state = {
    onShips: false,
    onMissions: false 
  }

  seeShips = () => {
    this.setState({ onShips: !this.state.onShips})
    
  }

  seeMissions = () => {
    
  }

  render() {
    console.log('Pagina de Naves', this.state.onShips)
    const currentPage = this.state.onShips ? <Home /> : <Ships />
    
  return (
    <AppContainer>
      <div>{currentPage}</div>
      <ShipsButton onClick={this.seeShips}>Mudar de Página</ShipsButton>
      
    </AppContainer>
  );
}
}

export default App;
