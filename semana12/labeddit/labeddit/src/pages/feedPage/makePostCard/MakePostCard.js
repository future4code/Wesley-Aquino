import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { useForm } from '../../../hooks/useForm'

const MakePost = styled.div`
display: flex;
flex-direction: column;
border: 2px solid black;
border-radius: 10px;
justify-content: center;
align-items: center;
`
const Input = styled.input`
width: 15vw;
margin: 4px;
`
const Button = styled.button`
width: 10vw;
`

const MakePostCard = () => {
    const {form, onChange} = useForm({text: "", title: ""})

    const handleInputPost = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const makePost = () => {
        const token = localStorage.getItem('token')

        const body = {
            text: form.text,
            title: form.title
        }
        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts", body, {
            headers: {
                Authorization: token
            }
        }).then((response) => {
            alert("Seu post foi criado!")
        }).catch(error => {
            alert("Deu ruim!")
        })
    }


    return <div>
        <MakePost>
            <Input 
                placeholder="Título"
                name="title"
                value={form.title}
                onChange={handleInputPost}
            />
            <Input 
                placeholder="Escreva seu texto"
                name="text"
                value={form.text}
                onChange={handleInputPost}
            />
            <Button onClick={makePost}>Postar</Button>
        </MakePost>
    </div>
}

export default MakePostCard;