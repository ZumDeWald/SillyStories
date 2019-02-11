import React, { Component } from 'react';

import Menu from './components/Menu.js';
import Selection from './components/Selection.js';

import './stylesheets/App.css';
import './stylesheets/Menu.css';
import './stylesheets/Selection.css';

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
        <Selection />
      </main>
    );
  }
}

export default App;
