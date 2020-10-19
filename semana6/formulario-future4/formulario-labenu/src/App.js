import React from 'react';
import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";
import Pagina3 from "./components/Pagina3";
import './App.css';
import Final from './components/Final';


 class App extends React.Component {
   state = {
      etapa: 1
   }


   proximaEtapa = () => {    
    this.setState({
      etapa: this.state.etapa + 1
    })
  }

    renderizarEtapa = () => {
     switch (this.state.etapa) {
        case 1:
         return <Pagina1 />;
        case 2:
          return <Pagina2 />;
        case 3:
          return <Pagina3 />;
        case 4:
          return <Final />
    }
  }   


   render() {

    if (this.state.etapa === 4){
      return <Final />
    } else {
      return (  
      <div className="App">
        {this.renderizarEtapa()}
        <button onClick={this.proximaEtapa}>PRÓXIMO</button>
      </div>
      )
}
}
}

export default App;
