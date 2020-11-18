import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 2vw;
padding: 6vw;
width: 5vw;
border: 2px solid black;
border-radius: 2vw;
background-color: rgb(238, 255, 255);
`
const Div = styled.div`
display: flex;
justify-content: center;
`
const Input = styled.input`
margin: 1vw;
border-radius: 5px;
width: 10vw;
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
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token) {
            history.push("/gerenciar")
        }
    }, [history])

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getPassword = (event) => {
        setPassword(event.target.value)
    }

    const goBack = () => {
        history.goBack()
    }

    const login = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/wesley-dumont/login", body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            history.push("/gerenciar")
        })
        .catch((error) => {
            console.log(error);
        })
    }


    return(
    <Div>
    <Container>
        <h1>Login</h1>
        <Input value={email} onChange={getEmail} placeholder="Email"></Input>
        <br/>
        <Input value={password} onChange={getPassword} placeholder="Senha"></Input>
        <br/>
        <Button onClick={login}>Entrar</Button>
        <Button onClick={goBack}>Voltar</Button>
    </Container>
    </Div>
    )
}
export default Login;   