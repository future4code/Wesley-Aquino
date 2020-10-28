import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const container  = styled.div`
text-align: center;
font-size: 2vw;
`


export class Register extends React.Component {
  state = {
    users: [],
    userName: "",
    userEmail: ""
  };

  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
      {
        headers: {
          Authorization: "wesley-aquino-dumont"
        }
      }
    )
    .then((response) => {
      this.setState({users: response.data});
    })
    .catch((error) => {
      console.log(error.message);
    });
  };

  createUser = () => {
    const body = {
      name: this.state.userName,
      email: this.state.userEmail
    };

    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
      {
        headers: {
          Authorization: "wesley-aquino-dumont"
        }
      }
    )
    .then((result) => {
      this.setState({ userName: "" })
      this.setState({ userEmail: "" })
      this.getUsers();
    })
    .catch((error) => {
      console.log(error.message);
    })
  }

  onChangeNameValue = (event) => {
    this.setState({ userName: event.target.value})
  }

  onChangeEmailValue = (event) => {
    this.setState({ userEmail: event.target.value})
  }


  render() {
    const nameList = this.state.users.map((user) => {
    return <p key={user.id}>{user.name}</p>;
    })
    return (
      <div className="container">
        <h1>Cadastro de Usuário</h1>
        <p>Nome: </p>
        <input
          placeholder="Digite seu nome"
          value={this.state.userName}
          onChange={this.onChangeNameValue}
          
        />
        <p>E-mail: </p>
        <input
          placeholder="Digite seu email"
          value={this.state.userEmail}
          onChange={this.onChangeEmailValue}
        />
        <div>
        <button onClick={this.createUser}>Salvar</button>
        <button onClick={this.props.goToUsers}>Ver todos os usuários</button>
        </div>

       <div nameList={nameList}>
         
        </div>

      </div>
    )
  }
}

