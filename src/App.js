import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.scss';
import ButtonApp from './ButtonApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="block-button">
              <ButtonApp/>
          </div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
