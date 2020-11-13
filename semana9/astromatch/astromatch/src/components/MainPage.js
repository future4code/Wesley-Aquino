import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from '../img/logo.png'

const MainContainer = styled.div`
text-align: center;
border: solid 3px black;
border-radius: 10px;
width: 20vw;
`
const Footer = styled.div`

`
const LikeButton = styled.button`
border: 2px solid green;
border-radius: 20px;
font-size: 2vw;
color: red;
margin: 2vw;
`
const UnlikeButton = styled.button`
border: 2px solid red;
border-radius: 20px;
font-size: 2vw;
color: red;
margin: 2vw;
`
const Body = styled.div`

`
const Header = styled.div`
display: flex;
justify-content: flex-end;
justify-content: space-around;
border: solid 3px blue;
border-radius: 10px;
height: 3vw;
margin: 10px;
`
const Img = styled.img`
width: 8vw;
`

const LikedButton = styled.button`
height: 30px;
margin-top: 15px;
background-color: blue;
color: white;
font-size: 20px;
`
const ProfilePhoto = styled.img`
width:15vw;
height:35vh;
`

function MainPage(props) {
    const [profile, setProfile] = useState([])

    useEffect(() => {
        getProfile()
    }, [])

        
        const getProfile = () => {
            
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wesley/person")
        .then(response => {
            setProfile(response.data.profile)
        })
        .catch(error => {
            console.log(error)
        })
    }


    const gotMatch = () => {
        const body = {
            id: profile.id,
            choice: true
        }
        
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wesley/choose-person", body)
        .then(response => {
            getProfile()
    })
        .catch(error => {
            console.log(error)
        })
        
    }

    return <MainContainer>

        <Header>
            <Img src={logo}/>
            <LikedButton onClick={props.goToMatch}>Matches</LikedButton>           
        </Header>
    

        <Body>
        <ProfilePhoto src={profile.photo}/>
        <h3>{profile.name}</h3>
        <h4>Idade: {profile.age}</h4>
        <p>{profile.bio}</p>
        </Body>

        <Footer>
            <UnlikeButton onClick={() => gotMatch(false)}>X</UnlikeButton>
            <LikeButton onClick={() => gotMatch(true)}>♥</LikeButton>
        </Footer>
    </MainContainer>
}
export default MainPage;