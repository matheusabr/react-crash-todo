import React, { Component } from 'react';

class AddTodo extends Component {
  render() {
    return (
      <form style={{ display: 'flex', padding: '5px' }}>
        <input
          type="text"
          name="title"
          placeholder="Add todo"
          style={{ flex: '10', height: '30px', padding: '5px' }}
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

export default AddTodo;
