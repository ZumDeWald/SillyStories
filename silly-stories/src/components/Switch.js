import React from 'react';

const Switch = (word) => {

  switch(word) {
    case "_propName" :
      return <input className="input" type="text" key={word} id={word} placeholder="[proper name]" maxLength="25" required />;

    case "_noun1" :
      return <input className="input" type="text" key={word} id={word} placeholder="[noun]" maxLength="20" required />;

    case "_noun2" :
      return <input className="input" type="text" key={word} id={word} placeholder="[noun]" maxLength="20" required />;

    case "_noun3" :
      return <input className="input" type="text" key={word} id={word} placeholder="[noun]" maxLength="20" required />;

    case "_noun4" :
      return <input className="input" type="text" key={word} id={word} placeholder="[noun]" maxLength="20" required />;

    case "_noun5" :
      return <input className="input" type="text" key={word} id={word} placeholder="[noun]" maxLength="20" required />;

    case "_adj1" :
      return <input className="input" type="text" key={word} id={word} placeholder="[adjective]" maxLength="20" required />;

    case "_adj2" :
      return <input className="input" type="text" key={word} id={word} placeholder="[adjective]" maxLength="20" required />;

    case "_adj3" :
      return <input className="input" type="text" key={word} id={word} placeholder="[adjective]" maxLength="20" required />;

    case "_adj4" :
      return <input className="input" type="text" key={word} id={word} placeholder="[adjective]" maxLength="20" required />;

    case "_adv1" :
      return <input className="input" type="text" key={word} id={word} placeholder="[adverb]" maxLength="20" required />;

    case "_verb1" :
      return <input className="input" type="text" key={word} id={word} placeholder="[verb]" maxLength="20" required />;

    case "_verb2" :
      return <input className="input" type="text" key={word} id={word} placeholder="[verb]" maxLength="20" required />;

    case "_num1" :
      return <input className="input" type="text" key={word} id={word} placeholder="[number]" maxLength="20" required />;

    case "_num2" :
      return <input className="input" type="text" key={word} id={word} placeholder="[number]" maxLength="20" required />;

    case "_feel1" :
      return <input className="input" type="text" key={word} id={word} placeholder="[feeling (happy/etc)]" maxLength="20" required />;

    case "_fam1" :
      return <input className="input" type="text" key={word} id={word} placeholder="[relative (sister/etc)]" maxLength="20" required />;

    case "_skill1" :
      return <input className="input" type="text" key={word} id={word} placeholder="[skill]" maxLength="20" required />

    default: console.log("Nope");
  }

}

export default Switch;
