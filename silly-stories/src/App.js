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

    // //Bindings
    // this.setFormSubmissions = this.setFormSubmissions.bind(this);
    // this.formSubmit = this.formSubmit.bind(this);
  }

  setStory = (newStory) => {
    this.setState({ story : newStory });
    this.setState({ showStory: true });
  }

  resetStory = () => {
    this.setState({ showStory: false });
  }

  /* setState to add each entry from the form submission into it's own array with the name and value of the entry. This will be passed to the FinalStory component and used to replace the placeholder words. */
  // setFormSubmissions = (targetName, targetValue) => {
  //   this.setState(prevState => ({
  //     formValues: [...prevState.formValues,
  //                 [targetName, targetValue] ]
  //   }));
  // }

  /* Retrieves form data from Form component and adds each entry to local state */
  // formSubmit = (e) => {
  //   e.preventDefault();
  //   const target = e.target;
  //   /* Loop over form data and extract each input value into a new entry in local state.
  //   Unable to get for...in loop to work, had to use regular for loop and then have the index to access each entry in the form data. */
  //   for (let i = 0; i < target.length; i++) {
  //     let targetName = target[i].name;
  //     targetName = targetName.replace(/[{}]/g, "");
  //     let targetValue = target[i].value;
  //     this.setFormSubmissions(targetName, targetValue);
  //   };
  //   console.log(this.state.formValues);
  // }

  render() {
    return (
      <main id="top-level-container">
        <header className="App-header">
          <p>
            Silly Stories
          </p>
        </header>
        <Menu resetStory={this.resetStory}/>
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
