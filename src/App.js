import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    //chama o construtor do Component
    super();

    this.state = {
      string: 'Hello - Haroldo Ramirez da Nobrega'
    }
  }
  render() {
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.string}</p>
        <button onClick={() => this.setState({ string: 'Hello Haroldo'})}>Change text</button>
      </header>
    </div>
    );
  }
}

export default App;
