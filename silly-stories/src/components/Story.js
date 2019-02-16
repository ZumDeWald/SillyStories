import React from 'react';

const Story = (props) => {

  //Destructuring
  const { chosenStory } = props;

  return (
    <section id="story">
      <h3>{chosenStory[0]}</h3>
      {chosenStory[1]}
    </section>
  );
}

export default Story
