import React, { useEffect, useState } from 'react'
import Header from './components/header';
import List from './components/list';
import FormAdd from './components/form-add';

import './App.css';

function App() {
  
  return (
    <div className="App">
      <Header title="Todo list" />
      <FormAdd />
      <section>
        <h2>Itens</h2>
        <List />
      </section>
    </div>
  );
}

export default App;