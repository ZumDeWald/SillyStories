import React from 'react';

const Story = (props) => {

  //Destructuring
  const { chosenStory } = props;

  return (
    <section id="story">
      <p className="directions">Fill in spaces</p>
      <p className="directions">Reveal new story</p>
      <h3 className="chosenStory">/ / {chosenStory[0]}</h3>
      {chosenStory[1]}
    </section>
  );
}

export default Story
