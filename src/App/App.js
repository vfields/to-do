import React from 'react';
import './App.css';
import Form from '../Form/Form.js';
import TodosContainer from '../TodosContainer/TodosContainer.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  addToDo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  deleteToDo = (id) => {
    const filteredTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: filteredTodos
    })
  }

  render() {
    return (
      <main>
        <h1>My To Dos</h1>
        <Form />
        <TodosContainer />
      </main>
    )
  }
}

export default App;
