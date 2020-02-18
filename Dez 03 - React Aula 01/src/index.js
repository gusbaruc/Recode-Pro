import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Mundo'
    };
    //Criação do objeto {dados}:
    this.dados = {
      titulo: 'Desenvolvedor Full-Stack',
      objetivo: 'Aprender tecnologias incríveis para construir coisas magníficas!',
      tecAprendidas: 'JavaScript, TypeScript, ReactJS, Angular, Python, NodeJS, entre outras.'
    };
  }
  //Criação dos métodos formatados:
  getTitulo(titulo) {
    return (
      <h1>{titulo}</h1>
    );
  }

  getParagrafo(nome, texto) {
    return (
      <p>
        <b>{nome}:</b> {texto}
      </p>
    );
  }

/*
  Criação das variáveis que receberão o conteúdo formatado junto a chamada dos métodos:
  Obs: Está certo, porém é mais certo a criação do objeto dados com os 3 parâmetros
  ---------------------------------------------------------------------------------
  titulo = this.getTitulo("Desenvolvedor Full-Stack")
  paragrafo1 = this.getParagrafo("Objetivo", "Aprender tecnologias incríveis para construir coisas magníficas!")
  paragrafo2 = this.getParagrafo("Tecnologias aprendidas", "JavaScript, TypeScript, ReactJS, Angular, Python, NodeJS, entre outras.")
*/

  render() {
    return (
      <div>
        //Chamando métodos usando o objeto como parâmetro
        {this.getTitulo(this.dados.titulo)}
        {this.getParagrafo("Objetivos", this.dados.objetivo)}
        {this.getParagrafo("Tecnologias Aprendidas", this.dados.tecAprendidas)}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
