import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      urgent: false
    }
  }

  handleChange = (event) => {
    const {name, value, type, checked} = event.target;
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  handleClick = (event) => {
    event.preventDefault();
    const todo = {
      ...this.state
    };
    this.props.addToDo(todo);
    this.clearForm();
  }

  clearForm = () => {
    this.setState({
      title: '',
      description: '',
      urgent: false
    });
  }

  render() {
    return (
      <form>
        <input
            type="text"
            value={this.state.title}
            name="title"
            placeholder="What do you need to do?"
            onChange={this.handleChange}
        />
        <textarea
            value={this.state.description}
            name="description"
            placeholder="Add to-do details here!"
            onChange={this.handleChange}
        />
        <label>
          <input
              type="checkbox"
              name="urgent"
              checked={this.state.urgent}
              onChange={this.handleChange}
          /> Urgent
        </label>
        <p />
        <button onClick={this.handleClick}>Add To Do!</button>
      </form>
    )
  }
}

export default Form
