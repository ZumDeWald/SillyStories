import React, { useEffect } from 'react';

import Switch from './Switch.js';

const Story = (props) => {

  //Destructuring
  const { chosenStory } = props;

  /* React Effect Hook that will run every render. */
  useEffect(() => {
    //Hide all spans on render
    const spans = document.getElementsByClassName("story-words");
    for (let i=0; i < spans.length; i++) {
      spans[i].classList.remove("visible");
    };
    //Clear all input fields on render
    const inputs = document.getElementsByClassName("input");
    for (let i=0; i < inputs.length; i++) {
      inputs[i].value = "";
    };
  })

  //Show spans on button click
  const revealStory = () => {
    const spans = document.getElementsByClassName("story-words");
    for (let i=0; i < spans.length; i++) {
      spans[i].classList.toggle("visible");
    };
  }

  const test = (word) => {
    return Switch({word});
  }

  return (
    <section id="story">
      <p className="directions">Fill in spaces</p>
      <p className="directions">Reveal new story</p>
      <h3 className="chosenStory">/ / {chosenStory[0]}</h3>
      <p>This is a {test("_noun1")}</p>
      <button id="revealStory" className="hover-hand"
              onClick={revealStory}> Reveal my story!
      </button>
      <h4><em>*Unsure what an adjective is? Check the Glossary in the menu</em></h4>
    </section>
  );
}

export default Story
