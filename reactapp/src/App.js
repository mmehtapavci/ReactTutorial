import React, { Component } from 'react';
import Navbar from "./companent/Navbar";
import User from "./companent/User";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title="User App 2" />
        <hr />
        <User
          name="Mustafa Murat Coşkun "
          salary="5000"
          department="Bilişim"
        />
        <User
          name="Oğuz Artıran"
          salary="6000"
          department="Bilişim"
        />
      </div>
    );
  }
}

export default App;
