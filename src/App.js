import React, { Component } from'react';
import './assets/estilo.css';

import Biscoito from './assets/biscoito.png';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textoFrase: ""
    };
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    this.frases = [
      'Siga os bons e aprenda com eles!',
      'O bom-senso vale mais do que muito conhecimento',
      'O riso é a menor distância entre duas pessoas',
      'Deixe de lado as preocupações e seja feliz',
      'Realize o óbvio, pense no improvável e conquiste o impossível',
      'Acredite em milagres, mas não dependa deles',
      'A maior barreira para o sucesso é o medo do fracasso'
    ];
  }
}