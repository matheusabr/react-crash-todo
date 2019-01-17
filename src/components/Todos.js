import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    // console.table(this.props.todos);
    return this.props.todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} removeTodo={this.props.removeTodo} />
    ));
  }
}

// Set the property type
// and if it is required
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default Todos;