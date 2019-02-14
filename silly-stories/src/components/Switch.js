
const Switch = (word) => {

  switch(word) {
    case "_propName" :
      return `<input class="input" type="text" id=${word} placeholder="[proper name]" maxlength="25" required> <br>`;

    case "_noun1" :
      return `<input class="input" type="text" id=${word} placeholder="[noun]" maxlength="20" required> <br>`;

    case "_noun2" :
      return `<input class="input" type="text" id=${word} placeholder="[noun]" maxlength="20" required> <br>`;

    case "_noun3" :
      return `<input class="input" type="text" id=${word} placeholder="[noun]" maxlength="20" required> <br>`;

    case "_noun4" :
      return `<input class="input" type="text" id=${word} placeholder="[noun]" maxlength="20" required> <br>`;

    case "_noun5" :
      return `<input class="input" type="text" id=${word} placeholder="[noun]" maxlength="20" required> <br>`;

    case "_adj1" :
      return `<input class="input" type="text" id=${word} placeholder="[adjective]" maxlength="20" required> <br>`;

    case "_adj2" :
      return `<input class="input" type="text" id=${word} placeholder="[adjective]" maxlength="20" required> <br>`;

    case "_adj3" :
      return `<input class="input" type="text" id=${word} placeholder="[adjective]" maxlength="20" required> <br>`;

    case "_adj4" :
      return `<input class="input" type="text" id=${word} placeholder="[adjective]" maxlength="20" required> <br>`;

    case "_adv1" :
      return `<input class="input" type="text" id=${word} placeholder="[adverb]" maxlength="20" required> <br>`;

    case "_verb1" :
      return `<input class="input" type="text" id=${word} placeholder="[verb]" maxlength="20" required> <br>`;

    case "_verb2" :
      return `<input class="input" type="text" id=${word} placeholder="[verb]" maxlength="20" required> <br>`;

    case "_num1" :
      return `<input class="input" type="text" id=${word} placeholder="[number]" maxlength="20" required> <br>`;

    case "_num2" :
      return `<input class="input" type="text" id=${word} placeholder="[number]" maxlength="20" required> <br>`;

    case "_feel1" :
      return `<input class="input" type="text" id=${word} placeholder="[feeling (happy/etc)]" maxlength="20" required> <br>`;

    case "_fam1" :
      return `<input class="input" type="text" id=${word} placeholder="[relative (sister/etc)]" maxlength="20" required> <br>`;

    case "_skill1" :
      return `<input class="input" type="text" id=${word} placeholder="[skill]" maxlength="20" required> <br>`;
      
    default: break;
  }

}

export default Switch;
