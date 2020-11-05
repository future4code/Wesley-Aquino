import axios from 'axios';
import styled from 'styled-components';
import React from 'react';
import logo from '../img/logo.png'

const HomeContainer = styled.div`
color: grey;
background-color: black;
text-align: center;
width: 20vw;
height: 49vw;
`
const Img = styled.img`
height: 8vw;
`
const Input = styled.input`
text-align: center;
font-size: 100%;
width: 70%;
height: 3%;
border-color: rgb(60, 179, 113);
border-radius: 20px;
margin: 10px;
`

const BotaoNovaPlaylist = styled.button`
margin: 10px;
background: #0FDF9B;
   background-image: -webkit-linear-gradient(top, #0FDF9B, #1ED04B);
   background-image: -moz-linear-gradient(top, #0FDF9B, #1ED04B);
   background-image: -ms-linear-gradient(top, #0FDF9B, #1ED04B);
   background-image: -o-linear-gradient(top, #0FDF9B, #1ED04B);
   background-image: -webkit-gradient(to bottom, #0FDF9B, #1ED04B);
   -webkit-border-radius: 20px;
   -moz-border-radius: 20px;
   border-radius: 10px;
   color: #FFFFFF;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 20px;
   font-weight: 100;
   padding: 10px;
   -webkit-box-shadow: 1px 1px 20px 0 #000000;
   -moz-box-shadow: 1px 1px 20px 0 #000000;
   box-shadow: 1px 1px 20px 0 #000000;
   text-shadow: 1px 1px 20px #000000;
   border: solid #337FED 1px;
   display: inline-block;
   cursor: pointer;
   text-align: center;
`

class Home extends React.Component {
    state = {
        inputPlaylist: ""
    }

onChangePlaylistValue = (event) => {
    this.setState({ inputPlaylist: event.target.value})
}

savePlaylist = () => {
    const body = {
        name: this.state.inputPlaylist
    };
    axios
        .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            body,
            {
                headers: {
                    Authorization: "wesley-aquino-dumont"
                }
            }
        )
        .then((response) => {
            this.setState({ inputPlaylist: ""})
            //fazer o pega playlist
        })
        .catch((error) => {
            console.log(error.message);
        })
}    
    render() {
        console.log(this.state.inputPlaylist)
        return <HomeContainer>
            <Img src={logo}/>
            <h3>Crie sua playlist</h3>
            <Input 
            placeholder="Nome da sua nova playlist"
            value={this.state.inputPlaylist}
            onChange={this.onChangePlaylistValue}
            />
            <br/>
            <BotaoNovaPlaylist onClick={this.savePlaylist}>Criar Playlist</BotaoNovaPlaylist>
        </HomeContainer>

    }
}
export default Home;