import React from 'react';


class Pagina1 extends React.Component {
    state = {
        
    };
    
render() {


return (
    <div className="App">
      <h1>ETAPA 1 - SEUS DADOS GERAIS</h1>
      <p>1. Digite seu Nome:</p>
      <input type="text"></input>
      <p>2. Digite sua Idade:</p>
      <input type="number"></input>
      <p>3. Digite seu Email:</p>
      <input type="textS"></input>
      <p>4 .Qual o grau de escolaridade:</p>
      
      <div>
        <select>
          <option>Selecione</option>
          <option>Ensino Médio Incompleto</option>
          <option>Ensino Médio Completo</option>
          <option>Ensino Superior Incompleto</option>
          <option>Ensino Superior Completo</option>
        </select>           
      </div>

         
    </div>
)
}
}

export default Pagina1;