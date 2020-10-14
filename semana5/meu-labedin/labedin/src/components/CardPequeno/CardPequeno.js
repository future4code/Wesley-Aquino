import React from 'react';
import './CardPequeno.css'

function CardPequeno(props){
   return (
       <div>
            <p>{props.email}</p>
            <p>{props.endereco}</p>
       </div>
   ) 
}

export default CardPequeno;