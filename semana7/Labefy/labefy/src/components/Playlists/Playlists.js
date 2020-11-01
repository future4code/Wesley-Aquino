import axios from 'axios';
import styled from 'styled-components';
import React from 'react';

const PlaylistsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 50vw;
height: 49vw;
background-color: rgb(20, 20, 20);
`
const Playlist = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
color: white;
font-family: sans-serif;
font-size: 20px;
padding: 1%;
border: 1px solid grey;
border-radius: 10px;
margin: 3%;
width: 20vw;
`

const P =styled.button`
background: #D01E37;
background-image: -webkit-linear-gradient(top, #D01E37, #DF0F36);
background-image: -moz-linear-gradient(top, #D01E37, #DF0F36);
background-image: -ms-linear-gradient(top, #D01E37, #DF0F36);
background-image: -o-linear-gradient(top, #D01E37, #DF0F36);
background-image: -webkit-gradient(to bottom, #D01E37, #DF0F36);
-webkit-border-radius: 20px;
-moz-border-radius: 20px;
border-radius: 20px;
color: #FFFFFF;
font-family: Open Sans;
font-size: 15px;
font-weight: 600;
padding: 5px;
-webkit-box-shadow: 1px 1px 20px 0 #000000;
-moz-box-shadow: 1px 1px 20px 0 #000000;
box-shadow: 1px 1px 20px 0 #000000;
text-shadow: 1px 1px 20px #000000;
border: solid #DD380D 0;
text-decoration: none;
display: inline-block;
cursor: pointer;
text-align: center;
`
const BotaoDetalhar = styled.button`
background: #1EAFD0;
background-image: -webkit-linear-gradient(top, #1EAFD0, #6DDF0F);
background-image: -moz-linear-gradient(top, #1EAFD0, #6DDF0F);
background-image: -ms-linear-gradient(top, #1EAFD0, #6DDF0F);
background-image: -o-linear-gradient(top, #1EAFD0, #6DDF0F);
background-image: -webkit-gradient(to bottom, #1EAFD0, #6DDF0F);
-webkit-border-radius: 20px;
-moz-border-radius: 20px;
border-radius: 10px;
color: #FFFFFF;
font-family: Open Sans;
font-size: 20px;
font-weight: 600;
padding: 5px;
-webkit-box-shadow: 1px 1px 20px 0 #000000;
-moz-box-shadow: 1px 1px 20px 0 #000000;
box-shadow: 1px 1px 20px 0 #000000;
text-shadow: 1px 1px 20px #000000;
border: solid #DD380D 0;
text-decoration: none;
display: inline-block;
cursor: pointer;
text-align: center;
`
const TrackItem = styled.div`
color: white;
`

const Titulo = styled.h2`
color: white;
`
const CarregarPlaylist = styled.button`
background: #3DF670;
   background-image: -webkit-linear-gradient(top, #3DF670, #0B5724);
   background-image: -moz-linear-gradient(top, #3DF670, #0B5724);
   background-image: -ms-linear-gradient(top, #3DF670, #0B5724);
   background-image: -o-linear-gradient(top, #3DF670, #0B5724);
   background-image: -webkit-gradient(to bottom, #3DF670, #0B5724);
   -webkit-border-radius: 20px;
   -moz-border-radius: 20px;
   border-radius: 20px;
   height: 0;
   line-height: 0;
   color: #FFFFFF;
   font-family: Open Sans;
   width: 200px;
   font-size: 21px;
   font-weight: 100;
   padding: 15px;
   -webkit-box-shadow: 0 4px 0 2px #000000;
   -moz-box-shadow: 0 4px 0 2px #000000;
   box-shadow: 0 4px 0 2px #000000;
   text-shadow: 1px 1px 5px #000000;
   border: solid #0D772A 1px;
   text-decoration: none;
   display: inline-block;
   cursor: pointer;
   text-align: center;
`

class Playlists extends React.Component {
    state = {
        playlists: [],
        playlistDetailed: []
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

playlistDetails = (playlistId) => {
    axios
    .get(
       `${"https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"}/${playlistId}/${"tracks"}`,
       {
           headers: {
               Authorization: "wesley-aquino-dumont"
           }
       }
    )
    .then((response) => {
        this.setState({ playlistDetailed: response.data.result.tracks})
    })
}


    render() {
        console.log(this.state.playlistDetailed)
        const detailList = this.state.playlistDetailed.map((track) => {
        return <TrackItem>
            <br/>
            <p>{track.name}</p>
            <p>{track.artist}</p>
            <p>{track.url}</p>
            <br/>
            </TrackItem>
        })

        const playlistList = this.state.playlists.map((playlist) => {
        return <Playlist key={playlist.id}>{playlist.name}
        <BotaoDetalhar onClick={() => this.playlistDetails(playlist.id)}>Detalhar</BotaoDetalhar>
        <P onClick={() => this.deletePlaylist(playlist.id)}>Excluir</P>

        </Playlist>
        })
        return <PlaylistsContainer>
            <Titulo>Minhas Playlists</Titulo>
            <p>{playlistList}</p>
            <br/>
            <CarregarPlaylist onClick={this.loadPlaylists}>Carregar Playlists</CarregarPlaylist>           
            
            <TrackItem>
            <p>{detailList}</p>
            </TrackItem>

        </PlaylistsContainer>

    }
}
export default Playlists;