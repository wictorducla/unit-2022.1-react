import React, { useEffect } from 'react'
import Header from './components/header';
import ListItem from './components/list-Item';
import api from './services/api'

import './App.css';


function App() {
  useEffect(()=>{
    api.get('/users').then(response => {
      console.log(response)
    })
  },[])
  return (
    <div className="App">
      <Header title="Todo list"/>
      <section>
        <h2>Itens</h2>
        <ul>
          <ListItem title="Comprar pão"/>
          <ListItem title="Lavar carro"/>
          <ListItem title="Lançar notas"/>
        </ul>
      </section>
    </div>
  );
}

export default App;
