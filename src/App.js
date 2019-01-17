import React, { Component } from 'react'; // Obs 01: or import React from 'react';
import './App.css';

class App extends Component { // Obs 01: class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
      </div>
    );
  }
}

export default App;
