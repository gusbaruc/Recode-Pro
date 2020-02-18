import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class CursoHeader extends Component {
  render() {
    return <h1>{this.props.nome}</h1>
  }
}

class CursoContent extends Component {
  render() {
    return <p><b>{this.props.item}: </b> {this.props.valor}</p>
  }
}
  
class App extends Component {

  render() {
    return (
      <div>
        <CursoHeader nome = "Desenvolvedor Full-Stack"/>
        <CursoContent item = "Objetivo" valor = "Aprender tecnologias incríveis para construir coisas magníficas!"/>
        <CursoContent item = "Tecnologias aprendidas" valor = "JavaScript, TypeScript, ReactJS, Angular, Python, NodeJS, entre outras."/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
