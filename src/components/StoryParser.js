import React from "react";

const StoryParser = story => {
  const underScore = RegExp("_");
  let storyArray = story.split(" ");
  let storyParsed = storyArray.map(word => {
    if (!!underScore.test(word)) {
      let newWord = word.replace(/[_]/, "");
      return (
        <input
          className="input"
          type="text"
          name={newWord}
          placeholder="a skill"
          maxLength="25"
          required
        />
      );
    } else {
      return word;
    }
  });
  let storyJoined = storyParsed.join(" ");
  return storyJoined;
};

export default StoryParser;
