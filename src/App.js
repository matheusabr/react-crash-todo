import React, { Component } from 'react'; // Obs 01: or import React from 'react';
import './App.css';
// Components
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

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

  // (M) Toggle complete
  toggleComplete = (id) => {
    console.log('id', id);
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    }) });
  }

  // (M) Remove todo
  removeTodo = (id) => {
    console.log('id', id);
    this.setState({ todos: [ ...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    // console.table(this.state.todos);
    return (
      <div className="App" style={appStyle}>
        <Header />
        <AddTodo />
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

const appStyle = {
  backgroundColor: '#fdfdfd',
}

export default App;
