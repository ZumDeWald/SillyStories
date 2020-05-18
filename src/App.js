import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
      display: 'Selection',
      story: ['Choose Story', null],
    };
  }

  //Set state to selected story and render chosen component.
  setStory = (newStory, component) => {
    this.setState({story: newStory});
    this.setState({display: component});
  };

  //Set state to chosen component, this updates which component is rendered.
  changeDisplay = component => {
    this.setState({display: component});
  };

  render() {
    return (
      <main id='top-level-container'>
        <header className='App-header'>
          <p>Silly Stories</p>
          <hr />
          <hr />
        </header>
        <Menu
          handleChangeDisplay={this.changeDisplay}
          handleSetStory={this.setStory}
        />
        {/* Ternary with multiple options. Checks state for which component to render. */}
        {this.state.display === 'Selection' ? (
          <Selection handleSetStory={this.setStory} />
        ) : this.state.display === 'Story' ? (
          <Story
            chosenStory={this.state.story}
            handleChangeDisplay={this.changeDisplay}
          />
        ) : this.state.display === 'Glossary' ? (
          <Glossary />
        ) : (
          <p>Please choose a story or Glossary</p>
        )}
        {/* End of Ternary */}
      </main>
    );
  }
}

/* PROPTYPES */
App.propTypes = {
  setStory: PropTypes.func,
};

export default App;
