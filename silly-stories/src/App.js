import React, { Component } from 'react';

//Components
import Menu from './components/Menu.js';
import Selection from './components/Selection.js';
import Story from './components/Story.js';
import Glossary from './components/Glossary.js';

//Stylesheets
import './stylesheets/App.css';
import './stylesheets/Menu.css';
import './stylesheets/Selection.css';
import './stylesheets/Story.css';
import './stylesheets/Glossary.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: "Selection",
      story: ["Choose Story", null]
    }

  }

  setStory = (newStory, component) => {
    this.setState({ story : newStory });
    this.setState({ display: component });
  }

  resetStory = (component) => {
    this.setState({ display: component });
  }


  render() {
    return (
      <main id="top-level-container">
        <header className="App-header">
          <p>
            Silly Stories
          </p>
        </header>
        <Menu resetStory={this.resetStory}
              handleSetStory={this.setStory} />
            {(this.state.display === "Selection") ?
            <Selection handleSetStory={this.setStory} />
          :
             (this.state.display === "Story") ?
            <Story chosenStory={this.state.story} />
          :
            (this.state.display === "Glossary") ?
            <Glossary />
          : <p>Nothing to display</p>
        }
      </main>
    );
  }
}

export default App;
