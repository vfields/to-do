import React from 'react';
import './App.css';

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
      </main>
    )
  }
}

export default App;
