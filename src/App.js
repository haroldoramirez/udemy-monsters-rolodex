import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends React.Component {
  constructor() {
    //chama o construtor do Component
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
   
    //fazemos um fetch na url
    fetch('https://jsonplaceholder.typicode.com/users')
      //promise
      //transformamos a resposta em json
      .then(response => response.json())
      //os usuarios recebidos alterados a lista de monstros por usuarios
      .then(users => this.setState({ monsters : users}))
  }

  render() {
    return(
      <div className='App'>
        <CardList name='Haroldo'>
            <h1>Haroldo</h1>
        </CardList>
        {
          this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    );
  }
} 

export default App;