import React, { Component } from 'react'; // Obs 01: or import React from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component { // Obs 01: class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
