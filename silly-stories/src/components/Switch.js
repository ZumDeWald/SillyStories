const Switch = word => {
  /* Switch statement will return JSX based on the type of trigger handed to it */

  switch (word) {
    case "_name":
      return `</span><input className="input" type="text" name="name1" placeholder="name" maxlength="25" required /><span className="story-words">`;

    case "_name2":
      return `</span><input className="input" type="text" name="name2" placeholder="name" maxlength="25" required /><span className="story-words">`;

    case "_noun1":
      return `<input className="input" type="text" name="noun1" placeholder="noun" maxlength="20" required />`;

    case "_noun2":
      return `</span><input className="input" type="text" name="noun2" placeholder="noun" maxlength="20" required /><span className="story-words">`;

    case "_noun3":
      return `</span><input className="input" type="text" name="noun3" placeholder="noun" maxlength="20" required /><span className="story-words">`;

    case "_noun4":
      return `</span><input className="input" type="text" name="noun4" placeholder="noun" maxlength="20" required /><span className="story-words">`;

    case "_noun5":
      return `</span><input className="input" type="text" name="noun5" placeholder="noun" maxlength="20" required /><span className="story-words">`;

    case "_adj1":
      return `</span><input className="input" type="text" name="adj1" placeholder="adjective" maxlength="20" required /><span className="story-words">`;

    case "_adj2":
      return `</span><input className="input" type="text" name="adj2" placeholder="adjective" maxlength="20" required /><span className="story-words">`;

    case "_adj3":
      return `</span><input className="input" type="text" name="adj3" placeholder="adjective" maxlength="20" required /><span className="story-words">`;

    case "_adj4":
      return `</span><input className="input" type="text" name="adj4" placeholder="adjective" maxlength="20" required /><span className="story-words">`;

    case "_adj5":
      return `</span><input className="input" type="text" name="adj5" placeholder="adjective" maxlength="20" required /><span className="story-words">`;

    case "_adv1":
      return `</span><input className="input" type="text" name="adv1" placeholder="adverb" maxlength="20" required /><span className="story-words">`;

    case "_adv2":
      return `</span><input className="input" type="text" name="adv2" placeholder="adverb" maxlength="20" required /><span className="story-words">`;

    case "_verb1":
      return `</span><input className="input" type="text" name="verb1" placeholder="verb" maxlength="20" required /><span className="story-words">`;

    case "_verb2":
      return `</span><input className="input" type="text" name="verb2" placeholder="verb" maxlength="20" required /><span className="story-words">`;

    case "_verb3":
      return `</span><input className="input" type="text" name="verb3" placeholder="verb" maxlength="20" required /><span className="story-words">`;

    case "_verb4":
      return `</span><input className="input" type="text" name="verb4" placeholder="verb" maxlength="20" required /><span className="story-words">`;

    case "_num1":
      return `</span><input className="input" type="text" name="num1" placeholder="number" maxlength="20" required /><span className="story-words">`;

    case "_num2":
      return `</span><input className="input" type="text" name="num2" placeholder="number" maxlength="20" required /><span className="story-words">`;

    case "_num3":
      return `</span><input className="input" type="text" name="num3" placeholder="number" maxlength="20" required /><span className="story-words">`;

    case "_num4":
      return `</span><input className="input" type="text" name="num4" placeholder="number" maxlength="20" required /><span className="story-words">`;

    case "_feel1":
      return `</span><input className="input" type="text" name="feel1" placeholder="feeling" maxlength="20" required /><span className="story-words">`;

    case "_fam1":
      return `</span><input className="input" type="text" name="fam1" placeholder="relative" maxlength="20" required /><span className="story-words">`;

    case "_skill1":
      return `</span><input className="input" type="text" name="skill1" placeholder="skill" maxlength="20" required /><span className="story-words">`;

    case "_skill2":
      return `</span><input className="input" type="text" name="skill2" placeholder="skill" maxlength="20" required /><span className="story-words">`;

    default:
      break;
  }
};

export default Switch;
