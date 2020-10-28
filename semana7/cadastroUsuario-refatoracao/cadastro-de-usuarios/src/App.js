import React from 'react';
import axios from 'axios';
import Users from './components/Users';
import Register from './components/Register';
import styled from 'styled-components';

const ContainerApp = styled.div`
text-align: center;
padding: 3vw;
`

const Botao = styled.button`
height: 3vw;
width: 10vw;
font-size: 1vw;
`

class App extends React.Component {
  state = {
    usersPage: false
  };

goToUsers = () => {
  this.setState ({ usersPage: !this.state.usersPage})
}

render() {
  const currentPage = this.state.usersPage ? <Users /> : <Register />
  return <ContainerApp>
    <Botao onClick={this.goToUsers}>Ver lista de Usuários</Botao>
    {currentPage}
    
  </ContainerApp>

  
}
}
export default App;