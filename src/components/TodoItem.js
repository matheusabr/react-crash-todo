import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  // (S) Dynamic styling
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      border: '1px #ccc dashed',
      textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title, isCompleted } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p style={{ fontSize: 13, fontWeight: 'bold' }}>
          <input type="checkbox" checked={isCompleted} onChange={this.props.toggleComplete.bind(this, id)} /> {' '}
          {title}
          <button style={btnRemoveStyle} onClick={this.props.removeTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

// Set the property type
// and if it is required
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

// (S) Button Remove
const btnRemoveStyle = {
  backgroundColor: '#ff0000',
  color: "#fff",
  border: 'none',
  float: 'right',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
}

export default TodoItem;
