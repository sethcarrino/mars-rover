import React, { Component } from 'react';
import logo from '../logo.png';

class NavBar extends Component {
  render() {
    return (
      <div className="jumbotron title-bg">
          <img src={logo} className="App-logo logo" alt="logo" />
          <h2 className="title">Mars Rovers</h2>
      </div>
    );
  }
}

export default NavBar;
