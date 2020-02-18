import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Conteudo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nome: this.props.nome_inicial
    }

    this.props.mudaNome = this.mudaNome.bind(this)
  }

  mudaNome() {
    this.setState({nome: this.props.nome_final})
  }

  render() {
    return (
      <div>
        <p>Nome: {this.props.state.nome}</p>
        <button onClick = {this.mudaNome}>Alterar</button>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Conteudo nome_inicial = "João" nome_final = "Ribeiro"/>
        <Conteudo nome_inicial = "Ana" nome_final = "Catarina"/>
        <Conteudo nome_inicial = "Carlos" nome_final = "Antonio"/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("conteudo"))