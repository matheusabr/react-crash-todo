import React, { Component } from 'react'; // Obs 01: or import React from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component { // Obs 01: class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Book a hotel near workplace",
        isCompleted: false,
      },
      {
        id: 2,
        title: "Meeting with HR",
        isCompleted: true,
      },
      {
        id: 3,
        title: "Buy a pass card",
        isCompleted: false,
      },
    ]
  }
  render() {
    // console.table(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
