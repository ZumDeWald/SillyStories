import React, { Component } from 'react';

//Components
import Menu from './components/Menu.js';
import Selection from './components/Selection.js';
import Form from './components/Form.js';

//Stylesheets
import './stylesheets/App.css';
import './stylesheets/Menu.css';
import './stylesheets/Selection.css';
import './stylesheets/Form.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      story: ["Choose Story", `Nothing Chosen Yet`]
    }
  }

  setStory = (newStory) => {
    this.setState({ story : newStory });
  }

  render() {
    return (
      <main id="top-level-container">
        <header className="App-header">
          <p>
            Silly Stories
          </p>
        </header>
        <Menu />
        <Selection handleSetStory={this.setStory}/>
        <Form storyName={this.state.story[0]}/>
      </main>
    );
  }
}

export default App;
