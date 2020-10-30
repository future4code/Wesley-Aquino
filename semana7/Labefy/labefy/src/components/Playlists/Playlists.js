import axios from 'axios';
import styled from 'styled-components';
import React from 'react';

const PlaylistsContainer = styled.div`
text-align: center;
`

const P =styled.p`
margin: 2vw;
`

class Playlists extends React.Component {
    state = {
        playlists: []
    }

componentDidMount = () => {
    this.loadPlaylists();
    };


loadPlaylists = () => {
    axios
    .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
            headers: {
                Authorization: "wesley-aquino-dumont"
            }
        }
    )
    .then((response) => {
        this.setState({playlists: response.data.result.list})
    })
    .catch((error) => {
        console.log(error.message)
    })
}

deletePlaylist = (playlistId)  => {
    axios
    .delete(
        `${"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"}/${playlistId}`,
        {
            headers: {
                Authorization: "wesley-aquino-dumont"
            }
        }
    )
    .then((response) => {
        alert("Playlist deletada!")
        this.loadPlaylists();
    })
    .catch((error) => {
        console.log(error.message);
    })
}


    render() {
        const playlistList = this.state.playlists.map((playlist) => {
        return <P key={playlist.id}>{playlist.name}
        <button onClick={() => this.deletePlaylist(playlist.id)}>Excluir Playlist</button>
        <button>Detalhar</button>
        </P>
        })
        return <PlaylistsContainer>
            <h1>Playlists</h1>
            <p>{playlistList}</p>
            <br/>
            <button onClick={this.loadPlaylists}>Carregar Playlists</button>
        </PlaylistsContainer>

    }
}
export default Playlists;