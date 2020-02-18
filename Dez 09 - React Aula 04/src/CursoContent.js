import React, { Component } from 'react';
import { render } from 'react-dom';

export default class CursoContent extends Component {
  render() {
    return <p>{this.props.valor}</p>
  }
}