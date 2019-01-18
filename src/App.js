import React, { Component } from 'react'; // Obs 01: or import React from 'react';
import './App.css';

// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

// // Libs
// import uuid from 'uuid';
import axios from 'axios';

class App extends Component { // Obs 01: class App extends React.Component {
  state = {
    todos: [],
  }

  // It forces a re-render after update a state
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
      .then(res => {
				// console.log("​App -> componentDidMount -> res", res);
        // console.table(res.data);
        this.setState({ todos: res.data });
      })
  }

  // (M) Toggle complete
  toggleComplete = (id) => {
    console.log('id', id);
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  // (M) Remove todo
  removeTodo = (id) => {
    console.log("​App -> removeTodo -> id", id);
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res =>  this.setState({ todos: [ ...this.state.todos.filter(todo => todo.id !== id)] }))
  }

  // (M) Add todo
  addTodo = (title) => {
    console.log("​App -> addTodo -> title", title);
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    })
      .then(res =>  this.setState({ todos: [ ...this.state.todos, res.data]}))
  }

  render() {
    // console.table(this.state.todos);
    return (
      <Router>
        <div className="App" style={appStyle}>
          <div className="container">
            {/* Fixed session */}
            <Header />
            {/* Dynamic session */}
            {/* Add exact to show it component only when match path */}
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} removeTodo={this.removeTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

const appStyle = {
  backgroundColor: '#fdfdfd',
}

export default App;
