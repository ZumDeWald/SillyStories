import React, { Component } from 'react';

import Menu from './components/Menu.js';

import './stylesheets/App.css';
import './stylesheets/Menu.css';

class App extends Component {
  render() {
    return (
      <main id="top-level-container">
        <header className="App-header">
          <p>
            Silly Stories
          </p>
        </header>
        <Menu />
      </main>
    );
  }
}

export default App;
