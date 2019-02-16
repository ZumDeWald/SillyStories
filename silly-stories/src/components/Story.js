import React from 'react';

const Story = (props) => {

  //Destructuring
  const { chosenStory } = props;

  return (
    <section id="story">
      <p>Fill in the spaces and then hit the button to reveal your new Silly Story!</p>
      <h3>{chosenStory[0]}</h3>
      {chosenStory[1]}
    </section>
  );
}

export default Story
