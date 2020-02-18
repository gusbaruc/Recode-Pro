import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import CursoHeader from './CursoHeader';
import CursoContent from './CursoContent';
import CursoContent2 from './CursoContent2';

class App extends React.Component {

  constructor(props){
    super.props;
    this.clickOn = this.clickOn.bind(this);
    this.cickOff = this.clickOff.bind(this);
    this.state = {
      light: false
    };
  }

  clickOn() {
    this.setState({state: true})
  }

  clickOff() {
    this.setState({state: false})
  }

  render() {
    let luz = this.state.light;
    let ligar = <button onClick={this.clickOn}>Turn on the light</button>
    let desligar = <button onClick={this.clickOff}>Turn off the light </button>
    let img

    if (luz) {
      img = <img src={"https://www.w3schools.com/js/pic_bulbon.gif"}/>
    } else {
      img = <img src={"https://www.w3schools.com/js/pic_bulboff.gif"}/>
    }
    
    return (
      <div>
        <CursoHeader nome = "What Can JavaScript Do?"/>
        <CursoContent valor = "JavaScript can change HTML attribute values."/>
        <CursoContent2 valor = "In this case JavaScript changes the value of the src (source) attribute of an image."/>
        {ligar}
        {img}
        {desligar}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));