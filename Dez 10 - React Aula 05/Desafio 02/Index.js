class App extends React.Component {

    constructor(props){
      super(props)
        
      //Objeto
      this.state = {
        valor1: 0,
        valor2: 0,
        resultado: 0
      }
      
      //Manipuladores Bind de cada método
      this.manipulador1 = this.manipulador1.bind(this)
      this.manipulador2 = this.manipulador2.bind(this)
      this.soma = this.soma.bind(this)
      this.subtracao = this.subtracao.bind(this)
      this.divisao = this.divisao.bind(this)
      this.multiplicacao = this.multiplicacao.bind(this)
    }
    

    //Métodos dos botões
    manipulador1(event) {
      this.setState({valor1: event.target.value})
    }
  
    manipulador2(event) {
      this.setState({valor2: event.target.value})
    }
  
    soma(event) {
      this.setState({resultado: (parseFloat(this.state.valor1) + parseFloat(this.state.valor2))})
    }

    subtracao(event) {
      this.setState({resultado: (parseFloat(this.state.valor1) - parseFloat(this.state.valor2))})
    }

    divisao(event) {
      this.setState({resultado: (parseFloat(this.state.valor1) / parseFloat(this.state.valor2))})
    }

    multiplicacao(event) {
      this.setState({resultado: (parseFloat(this.state.valor1) * parseFloat(this.state.valor2))})
    }


  
    render() {
      return (
        <div className="Formatacao">
          <form>
            Valor 01:
            <input type="text" onChange={this.manipulador1} />
            <br/><br/>
  
            Valor 02:
            <input type="text" onChange={this.manipulador2} />
            <br/><br/>
  
            <input type="button" value="Somar" onClick={this.soma} />
            <input type="button" value="Subtrair" onClick={this.subtracao} />
            <input type="button" value="Dividir" onClick={this.divisao} />
            <input type="button" value="Multiplicar" onClick={this.multiplicacao} />
            <br/><br/>
  
            <p><b>Resultado: {this.state.resultado}</b></p>
  
          </form>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('conteudo'));