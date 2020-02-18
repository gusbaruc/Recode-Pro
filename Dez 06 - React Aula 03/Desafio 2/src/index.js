import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import CursoHeader from './CursoHeader';
import CursoContent from './CursoContent';


class App extends Component {

  constructor(props){
    super.props;
    this.handlePortuguesClick = this.handlePortuguesClick.bind(this);
    this.handleEnglishClick = this.handleEnglishClick.bind(this);
    this.state = { 
      language: 'pt-br',
      title: 'Desenvolvedor Full-Stack',
      line1: {item: 'Objetivo', valor: 'Aprender tecnologias incríveis para construir coisas magníficas'},
      line2: {item: 'Tecnologias aprendidas', valor: 'JavaScript, TypeScript, ReactJS, Angular, Python, NodeJS entre outras'}
    };
  }

  handlePortuguesClick() {
    this.setState(
      {
        language: 'pt-br', 
        title: 'Desenvolvedor Full-Stack',
        line1: {item: 'Objetivo', valor: 'Aprender tecnologias incríveis para construir coisas magníficas'},
        line2: {item: 'Tecnologias aprendidas', valor: 'JavaScript, TypeScript, ReactJS, Angular, Python, NodeJS entre outras'}
      }
    );
  }

  handleEnglishClick() {
    this.setState(
      {
        language: 'en', 
        title: 'Full-Stack Developer',
        line1: {item: 'Objetive', valor: 'Learn amazing technologies to build great things'},
        line2: {item: 'Technologies learned', valor: 'JavaScript, TypeScript, ReactJS, Angular, Python, NodeJS and more'}
      }
    );
  }
  
  render() {

    const idioma = this.state.language;
    let button;

    if (idioma == 'pt-br') {
      button = <button onClick={this.handleEnglishClick}>English</button>;
    } else {
      button = <button onClick={this.handlePortuguesClick}>Português </button>;
    }

    return (
      <div>
        {button}

        <CursoHeader nome={this.state.title}/>

        <CursoContent item={this.state.line1.item} valor={this.state.line1.valor} />

        <CursoContent item={this.state.line2.item} valor={this.state.line2.valor} />

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
