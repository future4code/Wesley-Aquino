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

const SubscribePage = () => {
    const {form, onChange} = useForm({username: "", email: "", password: ""})


    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const handleInputChange = (event) =>  {
        const {value, name} = event.target

        onChange(value, name)
    }
    console.log(form)

    const handleCreateUser = () => {
        const body = {
            email: form.email,
            password: form.password,
            username: form.username
        }

        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup", body)
        .then(() => {
            alert("Usuario criado com sucesso! ;)")
        })
        .catch(error => {
            alert("Erro ao criar usuário! :(")
        })
    }

    return <div>
        <Header>
            
        </Header>
        <Body>
            <h2>Cadastre-se</h2>
            <Input 
                placeholder="Nome de usuário"
                value={form.username}
                type="text" 
                name="username"
                onChange={handleInputChange}
            />
            <Input 
                placeholder="Email"
                value={form.email}
                type="email"
                name="email"
                onChange={handleInputChange}
            
            />
            <Input 
                placeholder="Senha"
                value={form.password}
                type="password"
                name="password"
                onChange={handleInputChange}
            
            />
            <Button onClick={handleCreateUser}>Cadastrar</Button>
            <Button onClick={goBack}>Voltar</Button>            
        </Body>
    </div>
}

export default SubscribePage;