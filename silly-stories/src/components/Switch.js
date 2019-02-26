import React from 'react';

const Switch = (props) => {

  /* Switch statement will return JSX based on the type of trigger handed to it */

    switch(props.word) {
      case "_name" :
        return <input className="input" type="text" name="name" placeholder="[name]" maxlength="25" required />;

      case "_name2" :
        return <input className="input" type="text" name="name2" placeholder="[name]" maxlength="25" required />;

      case "_noun1" :
        return <input className="input" type="text" name="noun1" placeholder="[noun]" maxlength="20" required />;

      case "_noun2" :
        return <input className="input" type="text" name="noun2" placeholder="[noun]" maxlength="20" required />;

      case "_noun3" :
        return <input className="input" type="text" name="noun3" placeholder="[noun]" maxlength="20" required />;

      case "_noun4" :
        return <input className="input" type="text" name="noun4" placeholder="[noun]" maxlength="20" required />;

      case "_noun5" :
        return <input className="input" type="text" name="noun5" placeholder="[noun]" maxlength="20" required />;

      case "_adj1" :
        return <input className="input" type="text" name="adj1" placeholder="[adjective]" maxlength="20" required />;

      case "_adj2" :
        return <input className="input" type="text" name="adj2" placeholder="[adjective]" maxlength="20" required />;

      case "_adj3" :
        return <input className="input" type="text" name="adj3" placeholder="[adjective]" maxlength="20" required />;

      case "_adj4" :
        return <input className="input" type="text" name="adj4" placeholder="[adjective]" maxlength="20" required />;

      case "_adv1" :
        return <input className="input" type="text" name="adv1" placeholder="[adverb]" maxlength="20" required />;

      case "_verb1" :
        return <input className="input" type="text" name="verb1" placeholder="[verb]" maxlength="20" required />;

      case "_verb2" :
        return <input className="input" type="text" name="verb2" placeholder="[verb]" maxlength="20" required />;

      case "_num1" :
        return <input className="input" type="text" name="num1" placeholder="[number]" maxlength="20" required />;

      case "_num2" :
        return <input className="input" type="text" name="num2" placeholder="[number]" maxlength="20" required />;

      case "_feel1" :
        return <input className="input" type="text" name="feel1" placeholder="[feeling (happy/etc)]" maxlength="20" required />;

      case "_fam1" :
        return <input className="input" type="text" name="fam1" placeholder="[relative (sister/etc)]" maxlength="20" required />;

      case "_skill1" :
        return <input className="input" type="text" name="skill1" placeholder="[skill]" maxlength="20" required />

      default:
      break;
      };
  };

export default Switch
