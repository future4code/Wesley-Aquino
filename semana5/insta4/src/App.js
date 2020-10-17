import React from 'react';
import './App.css';
import Post from './components/Post/Post';



class App extends React.Component {
  state = {
    posts: [{
      nomeUsuario: 'carlinhos',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario:'mariazinha',
        fotoUsuario:'https://picsum.photos/200/300?random=1',
        fotoPost:'https://picsum.photos/200/150?random=2',
      },
      {
        nomeUsuario:'zezinho',
        fotoUsuario:'https://picsum.photos/200/300?random=3',
        fotoPost:'https://picsum.photos/200/150?random=4'
      }]
  }

  render() {

    const listaDePosts = this.state.posts.map((post) => {
      return (
        <div>
        <Post
          nomeUsuario={post.nomeUsuario}  
          fotoUsuario={post.fotoUsuario} 
          fotoPost={post.fotoPost}
        />
        </div>
      )
    })

    return (
      <div>
        <div>{listaDePosts}</div>
      </div>
    )
  }
}
export default App;
 