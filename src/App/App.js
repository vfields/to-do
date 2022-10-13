import React from 'react';
import './App.css';
import Form from '../Form/Form.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  render() {
    return (
      <main>
        <h1>My To Dos</h1>
        <Form />
      </main>
    )
  }
}

export default App;
