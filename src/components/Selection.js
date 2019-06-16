import React from "react";

import Stories from "./Stories.js";

const Selection = props => {
  //Destructuring
  const { handleSetStory } = props;

  return (
    <section id="selection" className="flex-col-center">
      <h3 className="header-text bottom-line selection-header">
        Choose your adventure
      </h3>
      <ul className="no-list-style selection-list">
        {/* Map over all stories in Stories array and add each to Selection */}
        {Stories.map((story, index) => (
          <li
            className="selection-list-item flex-col-center hover-hand"
            onClick={() => {
              handleSetStory(story, "Story");
            }}
            key={index}
          >
            {story[0]}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Selection;
