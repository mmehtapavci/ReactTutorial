import React, { Component } from 'react';
import User from "./companent/User";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>App Component</h4>
        <User />
      </div >
    );
  }
}

export default App;
