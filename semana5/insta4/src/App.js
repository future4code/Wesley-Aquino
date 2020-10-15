import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'carlinhos'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
          />

          <Post
          nomeUsuario={'mariazinha'}
          fotoUsuario={'https://picsum.photos/200/300?random=1'}
          fotoPost={'https://picsum.photos/200/150?random=2'}
        />

          <Post
          nomeUsuario={'zezinho'}
          fotoUsuario={'https://picsum.photos/200/300?random=3'}
          fotoPost={'https://picsum.photos/200/150?random=4'}
        />
      </div>
    );
  }
}

export default App;
