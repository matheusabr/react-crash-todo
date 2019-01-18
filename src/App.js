import React, { Component } from 'react'; // Obs 01: or import React from 'react';
import './App.css';

// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

// Libs
import uuid from 'uuid';

class App extends Component { // Obs 01: class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Book a hotel near workplace",
        isCompleted: false,
      },
      {
        id: uuid.v4(),
        title: "Meeting with HR",
        isCompleted: true,
      },
      {
        id: uuid.v4(),
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
		console.log("​App -> removeTodo -> id", id);
    this.setState({ todos: [ ...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // (M) Add todo
  addTodo = (title) => {
		console.log("​App -> addTodo -> title", title);
    const newTodo = {
      id: uuid.v4(),
      title,
      isCompleted: false,
    }
    this.setState({ todos: [ ...this.state.todos, newTodo]});
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
