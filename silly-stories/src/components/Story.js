import React from 'react';

const Story = (props) => {

  const revealStory = () => {
    const spans = document.getElementsByTagName("span");
    for (let i=0; i < spans.length; i++) {
      spans[i].classList.toggle("visible");
    };
  }


  return (
    <section id="story">
      <h3>About Me</h3>
      <span>Hello, my name is </span>
      <input className="input" type="text" name="properName1" placeholder="[proper name]" maxLength="25" required />
      <span>! I have a </span>
      <input className="input" type="text" name="noun1" placeholder="[noun]" maxLength="25" required />
      <span>, </span>
      <input className="input" type="text" name="num1" placeholder="[number]" maxLength="25" required />
      <input className="input" type="text" name="noun2" placeholder="[noun]" maxLength="25" required />
      <span>'s, and a </span>
      <input className="input" type="text" name="noun3" placeholder="[noun]" maxLength="25" required />
      <span>. My biggest focus lately has been my </span>
      <input className="input" type="text" name="noun4" placeholder="[noun]" maxLength="25" required />
      <span>. </span>
      <input className="input" type="text" name="verb1" placeholder="[verb]" maxLength="25" required />
      <span>over </span>
      <input className="input" type="text" name="num2" placeholder="[number]" maxLength="25" required />
      <span>hours a day has kept me </span>
      <input className="input" type="text" name="adj1" placeholder="[adjective]" maxLength="25" required />
      <span>. Hopefully my </span>
      <input className="input" type="text" name="adj2" placeholder="[adjective]" maxLength="25" required />
      <span>skills in </span>
      <input className="input" type="text" name="skill1" placeholder="[a skill]" maxLength="25" required />
      <span>will get me a new </span>
      <input className="input" type="text" name="noun5" placeholder="[noun]" maxLength="25" required />
      <span>. My </span>
      <input className="input" type="text" name="fam1" placeholder="[sister/brother/etc]" maxLength="25" required />
      <span>thinks I am </span>
      <input className="input" type="text" name="feel1" placeholder="[feeling (happy, etc)]" maxLength="25" required />
      <span>and should be </span>
      <input className="input" type="text" name="verb2" placeholder="[verb]" maxLength="25" required />
      <span>instead.</span>
      <button id="revealStory"
              onClick={revealStory}>Reveal my story!</button>
    </section>
  );
}

export default Story
