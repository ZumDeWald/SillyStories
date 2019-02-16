import React from 'react';

  const revealStory = () => {
    const spans = document.getElementsByTagName("span");
    for (let i=0; i < spans.length; i++) {
      spans[i].classList.toggle("visible");
    };
  }

const Stories = [
  ["About Me",
   <section className="story">
     <span>Hello, my name is </span>
     <input className="input" type="text" name="name1" placeholder="name" maxLength="25" required />
     <span>! I have a </span>
     <input className="input" type="text" name="noun1" placeholder="noun" maxLength="25" required />
     <span>, </span>
     <input className="input" type="text" name="num1" placeholder="number" maxLength="25" required />
     <input className="input" type="text" name="noun2" placeholder="noun" maxLength="25" required />
     <span>'s, and a(n) </span>
     <input className="input" type="text" name="noun3" placeholder="noun" maxLength="25" required />
     <span>. My biggest focus lately has been my </span>
     <input className="input" type="text" name="noun4" placeholder="noun" maxLength="25" required />
     <span>. </span>
     <input className="input" type="text" name="verb1" placeholder="verb" maxLength="25" required />
     <span>ing over </span>
     <input className="input" type="text" name="num2" placeholder="number" maxLength="25" required />
     <span>hours a day has kept me </span>
     <input className="input" type="text" name="adj1" placeholder="adjective" maxLength="25" required />
     <span>. Hopefully my </span>
     <input className="input" type="text" name="adj2" placeholder="adjective" maxLength="25" required />
     <span>skills in </span>
     <input className="input" type="text" name="skill1" placeholder="a skill" maxLength="25" required />
     <span>will get me a new </span>
     <input className="input" type="text" name="noun5" placeholder="noun" maxLength="25" required />
     <span>. My sister thinks I am </span>
     <input className="input" type="text" name="adj3" placeholder="adjective" maxLength="25" required />
     <span>and should </span>
     <input className="input" type="text" name="verb2" placeholder="verb" maxLength="25" required />
     <span>instead.</span>
     <button id="revealStory"
             onClick={revealStory}>Reveal my story!
     </button>
   </section>
 ],

  ["Favorite Game",
   <section className="story">
     <span>My favorite game has </span>
     <input className="input" type="text" name="num1" placeholder="number" maxLength="25" required />
     <input className="input" type="text" name="noun1" placeholder="noun" maxLength="25" required />
     <span>'s, </span>
     <input className="input" type="text" name="num2" placeholder="number" maxLength="25" required />
     <input className="input" type="text" name="noun2" placeholder="noun" maxLength="25" required />
     <span>'s, and a very </span>
     <input className="input" type="text" name="adj1" placeholder="adjective" maxLength="25" required />
     <input className="input" type="text" name="noun3" placeholder="noun" maxLength="25" required />
     <span>! You can play it with </span>
     <input className="input" type="text" name="name1" placeholder="name" maxLength="25" required />
     <span>, or your mother. Don't </span>
     <input className="input" type="text" name="verb1" placeholder="verb" maxLength="25" required />
     <span>too close to the </span>
     <input className="input" type="text" name="adj2" placeholder="adjective" maxLength="25" required />
     <input className="input" type="text" name="noun4" placeholder="noun" maxLength="25" required />
     <span>or you're </span>
     <input className="input" type="text" name="adv1" placeholder="adverb" maxLength="25" required />
     <span>out!</span>
     <button id="revealStory"
             onClick={revealStory}>Reveal my story!
     </button>
   </section>
 ]
]

export default Stories;
