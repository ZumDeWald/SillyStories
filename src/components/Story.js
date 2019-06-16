import React, { useEffect } from "react";

const Story = props => {
  //Destructuring
  const { chosenStory } = props;

  /* React Effect Hook that will run every render. */
  useEffect(() => {
    //Hide all spans on render
    const spans = document.getElementsByClassName("story-words");
    for (let i = 0; i < spans.length; i++) {
      spans[i].classList.remove("visible");
    }
    //Clear all input fields on render
    const inputs = document.getElementsByClassName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  });

  //Show spans on button click
  const revealStory = () => {
    const spans = document.getElementsByClassName("story-words");
    for (let i = 0; i < spans.length; i++) {
      spans[i].classList.toggle("visible");
    }
  };

  //Parse story on render
  const parseStory = story => {
    const underScore = RegExp("_");
    let storyArray = story.split(" ");
    let storyParsed = storyArray.map((word, index) => {
      if (!!underScore.test(word)) {
        let newWord = word.replace(/[_]/, "");
        return (
          <input
            className="input"
            type="text"
            key={index}
            placeholder={newWord}
            maxLength="25"
            required
          />
        );
      } else {
        let addSpace = word.concat(" ");
        return (
          <span className="story-words" key={index}>
            {addSpace}
          </span>
        );
      }
    });
    let storyJoined = storyParsed.concat();
    return storyJoined;
  };

  let story = parseStory(chosenStory[1]);

  return (
    <section id="story-area">
      <p className="directions">Fill in spaces</p>
      <p className="directions">Reveal new story</p>
      <h3 className="chosenStory">/ / {chosenStory[0]}</h3>
      <section className="story">{story}</section>
      <button id="revealStory" className="hover-hand" onClick={revealStory}>
        {" "}
        Reveal my story!
      </button>
      <h4>
        <em>*Unsure what an adjective is? Check the Glossary in the menu</em>
      </h4>
    </section>
  );
};

export default Story;
