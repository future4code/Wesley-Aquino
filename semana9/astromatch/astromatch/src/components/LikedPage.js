import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import logo from '../img/logo.png'

const LikedContainer = styled.div`
text-align: center;
border: solid 3px black;
border-radius: 10px;
width: 20vw;
`

const Body = styled.div`

`
const Profile = styled.div`
display: flex;
margin: 2vw;
`
const Img = styled.img`
width: 8vw;
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
const BackButton = styled.button`
height: 30px;
margin-top: 15px;
background-color: blue;
color: white;
font-size: 20px;
`
const ProfileImage = styled.img`
width: 2vw;
padding: 1vw;
`

function LikedPage(props) {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

        const getMatches = () => {

        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wesley/matches")
        .then(response => {
            setMatches(response.data.matches)   
    })
        .catch(error => {
            console.log(error)
        })
    }

    const listMatches = matches.map((match) => {
        return (
            <Profile>
            <ProfileImage src={match.photo} />
            <h3>{match.name}</h3>
            </Profile>
        )
    })

    return(
        <LikedContainer>
            <Header>                
                <Img src={logo}/>
                <BackButton onClick={props.goToMain}>Voltar</BackButton>          
            </Header>

            <Body>
            {listMatches}
            
            </Body>
        </LikedContainer>
    )
}
export default LikedPage;