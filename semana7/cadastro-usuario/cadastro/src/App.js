import React from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import { Users } from './components/Users';
import { Register } from './components/Register';


export class App extends React.Component {
  state = {
    usersPage: false
  };

  goToUsers = () => {
    this.setState ({usersPage: !this.state.usersPage})
    console.log(this.state.usersPage)
  }
  
  
render(){
  const currentPage = () => {
    if (this.state.usersPage === false) {
      return <div>Oi</div>
    }
  }
  return <div>
  <Register goToUsers={this.goToUsers}/>
  </div>
  
}



}
export default App;