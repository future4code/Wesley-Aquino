import axios from 'axios';
import styled from 'styled-components';
import React from 'react';

const HomeContainer = styled.div`
background-color: green;
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
            <h1>Labefy</h1>
            <h2>Bem vind@ a sua plataforma de músicas favorita</h2>
            <h3>Crie suas playlists</h3>
            <input 
            placeholder="Nome da sua nova playlist"
            value={this.state.inputPlaylist}
            onChange={this.onChangePlaylistValue}
            />
            <br/>
            <button onClick={this.savePlaylist}>Criar Playlist</button>
        </HomeContainer>

    }
}
export default Home;