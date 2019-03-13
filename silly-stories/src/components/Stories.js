import React from 'react';

const Stories = [
  ["About Me",
    "Hello, my name is _name ! I have a _noun , _number _noun s, and a _noun . My biggest focus lately has been my _noun . _verb over _number hours a day has kept me _adjective . Hopefully my _adjective skills in _skill will get me a new _noun . My _sibling thinks I am _feeling and should be _verb instead."
  ],

  ["Favorite Game",
   <section className="story">
     <span className="story-words">My favorite game has </span>
     <input className="input" type="text" name="num1" placeholder="number" maxLength="25" required />
     <input className="input" type="text" name="noun1" placeholder="noun" maxLength="25" required />
     <span className="story-words">&apos;s, </span>
     <input className="input" type="text" name="num2" placeholder="number" maxLength="25" required />
     <input className="input" type="text" name="noun2" placeholder="noun" maxLength="25" required />
     <span className="story-words">&apos;s, and a very </span>
     <input className="input" type="text" name="adj1" placeholder="adjective" maxLength="25" required />
     <input className="input" type="text" name="noun3" placeholder="noun" maxLength="25" required />
     <span className="story-words">! You can play it with </span>
     <input className="input" type="text" name="name1" placeholder="name" maxLength="25" required />
     <span className="story-words">, or your mother. Don&apos;t </span>
     <input className="input" type="text" name="verb1" placeholder="verb" maxLength="25" required />
     <span className="story-words">too close to the </span>
     <input className="input" type="text" name="adj2" placeholder="adjective" maxLength="25" required />
     <input className="input" type="text" name="noun4" placeholder="noun" maxLength="25" required />
     <span className="story-words">or you're </span>
     <input className="input" type="text" name="adv1" placeholder="adverb" maxLength="25" required />
     <span className="story-words">out!</span>
   </section>
  ],

  ["Inventions",
   <section className="story">
     <span className="story-words">Did you know that the </span>
     <input className="input" type="text" name="noun1" placeholder="noun" maxLength="25" required />
     <span className="story-words"> was invented by </span>
     <input className="input" type="text" name="name1" placeholder="name" maxLength="25" required />
     <span className="story-words">? They spent $</span>
     <input className="input" type="text" name="num1" placeholder="number" maxLength="25" required />
     <span className="story-words"> developing a new </span>
     <input className="input" type="text" name="adj1" placeholder="adjective" maxLength="25" required />
     <span className="story-words"> feature that can </span>
     <input className="input" type="text" name="verb1" placeholder="verb" maxLength="25" required />
     <span className="story-words"> very </span>
     <input className="input" type="text" name="adv1" placeholder="adverb" maxLength="25" required />
     <span className="story-words">!</span>
   </section>
  ]
]

export default Stories;
