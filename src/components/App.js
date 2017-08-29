import React, { Component } from 'react';
import '../styles/App.css';
import GetImageForm from './GetImageForm.js';
import NavBar from './NavBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <GetImageForm />
      </div>
    );
  }
}

export default App;
