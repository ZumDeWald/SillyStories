import React, { useEffect } from 'react';

const Form = (props) => {

  //Empty variable that will be filled with form inputs and placed inside the form below */
  const formInputs = ``;

  /* Filter to match if key has a "$" in it. This is used when filtering the story and looking for the words we will be replacing which are marked as "$noun1", "$adj1", etc */
  const keyFilter = (key) => {
    return key.includes("$") === true;
  }

  /* React Effect Hook used to parse the story each time this component is rendered */
  useEffect(() => {
   if (!props.story) {
     //Simply escape if there's no data
     return
   } else {
    /* Split story at every word break and then filter out the words to be replaced. Example: $noun1 */
    let storySplit = props.story.split("");
    let storyFiltered = storySplit.filter(keyFilter);
    formBuild(storyFiltered);
   }
  })

  /* Loop over filtered story words and create input for each in the form */
  const formBuild = (storyWords) => {
    storyWords.map((word, key) => {
      switch(word) {
        case "$propName" :
          formInputs.append(`<input class="input" type="text" id="propName" placeholder="[proper name]" maxlength="25" required> <br>`);
          break;

        case "$noun1" :
          formInputs.append(`<input class="input" type="text" id="noun1" placeholder="[noun]" maxlength="20" required> <br>`);
          break;

        case "$noun2" :
          formInputs.append(`<input class="input" type="text" id="noun2" placeholder="[noun]" maxlength="20" required> <br>`);
          break;

        case "$noun3" :
          formInputs.append(`<input class="input" type="text" id="noun3" placeholder="[noun]" maxlength="20" required> <br>`);
          break;

        case "$noun4" :
          formInputs.append(`<input class="input" type="text" id="noun4" placeholder="[noun]" maxlength="20" required> <br>`);
          break;

        case "$noun5" :
          formInputs.append(`<input class="input" type="text" id="noun5" placeholder="[noun]" maxlength="20" required> <br>`);
          break;

        case "$adj1" :
          formInputs.append(`<input class="input" type="text" id="adj1" placeholder="[adjective]" maxlength="20" required> <br>`);
          break;

        case "$adj2" :
          formInputs.append(`<input class="input" type="text" id="adj2" placeholder="[adjective]" maxlength="20" required> <br>`);
          break;

        case "$adj3" :
          formInputs.append(`<input class="input" type="text" id="adj3" placeholder="[adjective]" maxlength="20" required> <br>`);
          break;

        case "$adj4" :
          formInputs.append(`<input class="input" type="text" id="adj4" placeholder="[adjective]" maxlength="20" required> <br>`);
          break;

        case "$adv1" :
          formInputs.append(`<input class="input" type="text" id="adv1" placeholder="[adverb]" maxlength="20" required> <br>`);
          break;

        case "$verb1" :
          formInputs.append(`<input class="input" type="text" id="verb1" placeholder="[verb]" maxlength="20" required> <br>`);
          break;

        case "$verb2" :
          formInputs.append(`<input class="input" type="text" id="verb2" placeholder="[verb]" maxlength="20" required> <br>`);
          break;

        case "$num1" :
          formInputs.append(`<input class="input" type="text" id="num1" placeholder="[number]" maxlength="20" required> <br>`);
          break;

        case "$num2" :
          formInputs.append(`<input class="input" type="text" id="num2" placeholder="[number]" maxlength="20" required> <br>`);
          break;

        case "$feel1" :
          formInputs.append(`<input class="input" type="text" id="feel1" placeholder="[feeling (happy/etc)]" maxlength="20" required> <br>`);
          break;

        case "$fam1" :
          formInputs.append(`<input class="input" type="text" id="fam1" placeholder="[relative (sister/etc)]" maxlength="20" required> <br>`);
          break;

        case "$skill1" :
          formInputs.append(`<input class="input" type="text" id="skill1" placeholder="[skill]" maxlength="20" required> <br>`);
          break;
        default: break;
        };
    });
    return formInputs;
  }

 return (
   <section>
     <h3 className="header-text bottom-line">Add your own fun to the story</h3>
     <form id="form" action="">

       <legend className="legend">Story: <em>{props.storyName}</em></legend>

      {formInputs}

     </form>
   </section>
 );
}

export default Form;
