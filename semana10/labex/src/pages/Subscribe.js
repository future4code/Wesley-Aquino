import React from 'react'
import axios from 'axios';
import styled from 'styled-components';
import loginimage from '../img/login-image.jpg';

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

function Login() {
    return(
    <Container>
        <Img src={loginimage} />
        <SubscribeDiv>
            <h1>Inscreva-se</h1>
            <Input placeholder="Nome"></Input>
            <Input placeholder="Email"></Input>
            <Input placeholder="Telefone"></Input>
            <button>Enviar</button>
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