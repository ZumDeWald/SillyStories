import React, { useEffect } from 'react';

const Story = (props) => {

  //Destructuring
  const { chosenStory } = props;

  useEffect(() => {
    const spans = document.getElementsByClassName("story-words");
    for (let i=0; i < spans.length; i++) {
      spans[i].classList.remove("visible");
    };
    const inputs = document.getElementsByClassName("input");
    for (let i=0; i < inputs.length; i++) {
      inputs[i].value = "";
    };
  })

  return (
    <section id="story">
      <p className="directions">Fill in spaces</p>
      <p className="directions">Reveal new story</p>
      <h3 className="chosenStory">/ / {chosenStory[0]}</h3>
      {chosenStory[1]}
      <h4><em>*Unsure what an adjective is? Check the Glossary in the menu</em></h4>
    </section>
  );
}

export default Story
