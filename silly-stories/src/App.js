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
      story: ["Choose Story", null]
    }

    //Bindings
    this.setFormSubmissions = this.setFormSubmissions.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  setStory = (newStory) => {
    this.setState({ story : newStory });
  }

  /* Generic setState that takes in the key and value to add to state dynamically through arguments. Used below to dynamically add each input entry from form data dynamically without knowing which values to expect beforehand. */
  setFormSubmissions = (targetName, targetValue) => {
    this.setState({ [targetName] : targetValue });
  }

  /* Retrieves form data from Form component and adds each entry to local state */
  formSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    /* Loop over form data and extract each input value into a new entry in local state.
    Unable to get for...in loop to work, had to use regular for loop and then have the index to access each entry in the form data. */
    for (let i = 0; i < target.length; i++) {
      let targetName = target[i].name;
      let targetValue = target[i].value;
      this.setFormSubmissions(targetName, targetValue);
    }
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
        <Form storyName={this.state.story[0]}
              story={this.state.story[1]}
              handleFormSubmit={this.formSubmit}/>
      </main>
    );
  }
}

export default App;
