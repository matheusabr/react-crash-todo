import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  state = {
    title: ''
  }

  updateInput = (e) => this.setState({ [e.target.name]: e.target.value });

  sendForm = (e) => {
    // Prevent refresh after submit button action
    e.preventDefault();
    this.props.addTodo(this.state.title);
    // Clear state
    this.setState({ title: '' });
  }

  render() {
    return (
      <form style={{ display: 'flex', padding: '5px' }} onSubmit={this.sendForm}>
        <input
          type="text"
          name="title"
          placeholder="Add todo"
          style={{ flex: '10', height: '30px', padding: '5px' }}
          value={this.state.title}
          onChange={this.updateInput}
        />
        <input 
          type="submit" 
          value="ADD"
          className="btn"
          style={{ flex: '2' }}
        />
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo;
