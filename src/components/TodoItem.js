import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  // Dynamic styling
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      border: '1px #ccc dashed',
      textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
    }
  }

  // Event
  // Opt 1: you have to bind this instance
  // markComplete(e) {
  //   console.log(this.props);
  // }
  // Opt 2: arrow function
  markComplete = (e) => {
    console.log(this.props);
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p style={{ fontSize: 13, fontWeight: 'bold' }}>
          {/* Opt 1: you have to bind this instance */}
          {/* <input type="checkbox" onChange={this.markComplete.bind(this)} /> {' '} */}
          {/* Opt 2: arrow function */}
          <input type="checkbox" onChange={this.markComplete} /> {' '}
          {this.props.todo.title}
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

export default TodoItem;
