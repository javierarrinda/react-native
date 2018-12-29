import React, { Component } from 'react';
import './App.css';

class App extends Component {

  thisIsTheJumpToFunction = (e) =>{
    e.preventDefault()
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={thisIsTheJumpToFunction()}>
          <img src="https://bit.ly/2ifCX2U" className="App-logo" alt="logo" />

        </button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
