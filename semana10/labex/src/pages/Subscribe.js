import React from 'react'
import axios from 'axios';
import styled from 'styled-components';
import loginimage from '../img/login-image.jpg';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 5fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
`
const Img = styled.img`
margin: 1vw;
width: 25vw;
`
const SubscribeDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Input = styled.input`
width: 20vw;
margin: 1vw;
`
const Button = styled.button`
background: #3D94F6;
background-image: -webkit-linear-gradient(top, #3D94F6, #1E62D0);
background-image: -moz-linear-gradient(top, #3D94F6, #1E62D0);
background-image: -ms-linear-gradient(top, #3D94F6, #1E62D0);
background-image: -o-linear-gradient(top, #3D94F6, #1E62D0);
background-image: -webkit-gradient(to bottom, #3D94F6, #1E62D0);
-webkit-border-radius: 20px;
-moz-border-radius: 20px;
margin: 2vw;
border-radius: 20px;
color: #FFFFFF;
font-family: Open Sans;
font-size: 20px;
font-weight: 100;
padding: 15px;
-webkit-box-shadow: 1px 1px 20px 0 #000000;
-moz-box-shadow: 1px 1px 20px 0 #000000;
box-shadow: 1px 1px 20px 0 #000000;
text-shadow: 1px 1px 20px #000000;
border: solid #337FED 1px;
text-decoration: none;
display: inline-block;
cursor: pointer;
text-align: center;
`

function Login() {

const history = useHistory()
const goToHome = () => {
    history.push("/")
}

    return(
    <Container>
        <Img src={loginimage} />
        <SubscribeDiv>
            <h1>Inscreva-se</h1>
            <Input type="text" placeholder="Nome"></Input>
            <Input type="number" placeholder="Idade"></Input>
            <Input type="text" placeholder="Porque você é um bom candidat@?"></Input>
            <Input type="text" placeholder="Profissão"></Input>
            <Input type="text" placeholder="País"></Input>
            <Button>Enviar</Button>
            <Button onClick={goToHome}>Voltar para Página Inicial</Button>
        </SubscribeDiv>
        <Img src={loginimage} />
        <Img src={loginimage} />
        <p></p>
        <Img src={loginimage} />
        <Img src={loginimage} />
        <p></p>
        <Img src={loginimage} />
    </Container>
    )
}
export default Login;