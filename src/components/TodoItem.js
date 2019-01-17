import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  // Dynamic styling
  getStyle = () => {
    return {
      textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
    }
  }
  render() {
    return (
      <div style={this.getStyle()}>
        <p style={{ fontSize: 13, fontWeight: 'bold' }}>{this.props.todo.title}</p>
      </div>
    )
  }
}

// Set the property type
// and if it is required
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default TodoItem;
