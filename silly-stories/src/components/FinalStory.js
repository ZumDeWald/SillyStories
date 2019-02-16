import React from 'react';

const FinalStory = (props) => {

  //Destructuring
  const { chosenStory } = props;

  return (
    <section id="final-story" className="flex-col-center">
      {chosenStory}
    </section>
  );
}

export default FinalStory
