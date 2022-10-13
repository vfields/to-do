import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: ''
    }
  }

  render() {
    return (
      <p>This is a form</p>
    )
  }
}

export default Form
