import React, { Component } from 'react';
import { render } from 'react-dom';

export default class CursoHeader extends Component {
  render() {
    return <h2>{this.props.nome}</h2>
  }
}