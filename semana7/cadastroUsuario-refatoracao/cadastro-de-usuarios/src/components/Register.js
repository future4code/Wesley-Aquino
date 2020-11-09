import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
text-align: center;
font-size: 1vw;
`
const Input =  styled.input`
height: 2vw;
width: 20vw;
font-size: 1vw;
border-radius: 1vw;
`
const DivBotao = styled.button`
height: 3vw;
width: 5vw;
margin: 1vw;
background-color: blue;
`


class Register extends React.Component {
    state = {
        users: [],
        userName: "",
        userEmail: "",
    }


onChangeNameValue = (event) => {
 this.setState({ userName: event.target.value})
}

onChangeEmailValue = (event) => {
 this.setState({ userEmail: event.target.value})
}


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


render() {
    return <Container>
        <h3>Cadastro de Usuário</h3>
        <p>Nome: </p>
        <Input
        placeholder="Digite seu nome"
        value={this.state.userName}
        onChange={this.onChangeNameValue}
        />

        <p>Email:</p>
        <Input
        placeholder="Digite seu email"
        value={this.state.userEmail}
        onChange={this.onChangeEmailValue}
        />
        <br/>
        <DivBotao>
        <button onClick={this.createUser}>Salvar</button>
        </DivBotao>


    </Container>



}
}
export default Register;