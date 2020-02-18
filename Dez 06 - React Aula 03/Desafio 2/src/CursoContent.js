import React, { Component } from 'react';
import { render } from 'react-dom';

export default class CursoContent extends Component {
  render(){
    return <p><b>{this.props.item}: </b> {this.props.valor}</p>
  }
}