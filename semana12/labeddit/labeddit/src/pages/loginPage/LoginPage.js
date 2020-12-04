import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

const Header = styled.div`
height: 5vw;
background-color: orange;
`
const Body = styled.div`
background-color: rgb(245,255,250);
display: flex;
flex-direction: column;
align-items: center;
padding: 8vw;
height: 58vh;
`
const Input = styled.input`
margin: 10px;
width: 20vw;
`
const Button = styled.button`
margin: 10px;
border-radius: 10px;
color: #FFFFFF;
font-family: Open Sans;
font-size: 20px;
padding: 5px;
background-color: #F6D03D;
text-decoration: none;
display: inline-block;
cursor: pointer;
text-align: center;
`

const LoginPage = () => {
    const {form, onChange} = useForm({email: "", password: ""})
    
    const history = useHistory()

    const goToSubscribe = () => {
        history.push("/cadastro")

        
    }

    console.log(form)

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    } 

    const login = () => {
        const body = {
            email: form.email,
            password: form.password
        }
        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login", body)
        .then((response) => {
            history.push("/feed")
            localStorage.setItem('token', response.data.token)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return <div>
        <Header>
            
        </Header>
        <Body>
            <h2>Login</h2>
            <Input 
                placeholder="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
            />
            <Input 
                placeholder="Senha"
                type="password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
            
            />
            <Button onClick={login}>Entrar</Button>
            <Button onClick={goToSubscribe}>Cadastre-se</Button>
        </Body>
    </div>
}

export default LoginPage;