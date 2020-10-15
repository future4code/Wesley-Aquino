import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C5635AQGUCmMt4nYYiA/profile-framedphoto-shrink_200_200/0?e=1602784800&v=beta&t=mCQiMRBx0nugOdjr2xZypzGGBEtauONl9xiPTpCghDE" 
          nome="Wesley Aquino" 
          descricao="Oi, eu sou o Wesley. Gosto de estudar programação e estou em busca da minha realização pessoal e profissional. Gosto de desafios e a programação me proporciona isso todos os dias"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="card-pequeno">
        <CardPequeno email={"Email: wesleydev@developers.com"} />
      </div>
        
      <div className="card-pequeno">
        <CardPequeno endereco={"Endereço: Rua dos bobos 0. Casa engraçada"}/>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbS03zasfkvmoOWkHnOpdEMi94bCpRhfitZg&usqp=CAU" 
          nome="Escola de Música Murador" 
          descricao="Professor de Música e Arte" 
        />
        
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4EOiB0eJv3APuKcpQ4T6dxnetVuTrZrgz8w&usqp=CAU" 
          nome="Música" 
          descricao="Músico Baterista de muitas bandas." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

      <div></div>
    </div>
  );
}

export default App;
