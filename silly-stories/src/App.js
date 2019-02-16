import React, { Component } from 'react';

//Components
import Menu from './components/Menu.js';
import Selection from './components/Selection.js';
import Story from './components/Story.js';

//Stylesheets
import './stylesheets/App.css';
import './stylesheets/Menu.css';
import './stylesheets/Selection.css';
import './stylesheets/Story.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showStory: false,
      story: ["Choose Story", null]
    }

  }

  setStory = (newStory) => {
    this.setState({ story : newStory });
    this.setState({ showStory: true });
  }

  resetStory = () => {
    this.setState({ showStory: false });
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
        {(!this.state.showStory) ?
          <Selection handleSetStory={this.setStory} />
          :
          <Story chosenStory={this.state.story} />
          }
      </main>
    );
  }
}

export default App;
