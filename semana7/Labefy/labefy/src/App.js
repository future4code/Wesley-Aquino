import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import React from 'react';
import Home from './components/Home';
import Playlists from './components/Playlists/Playlists';
import PlaylistDetails from './components/Playlists/PlaylistsDetails';

const AppContainer = styled.div`
background-color: green;
`


class App extends React.Component {
  state = {
    onPageHome: ""
  }
  render() {
  return (
    <AppContainer>
     <Home />
     <Playlists />
     
     
    </AppContainer>
  );
}
}

export default App;
