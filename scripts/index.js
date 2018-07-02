$(document).ready(() => {

  /* VARIABLES */

const $storyContainer = $(".story-container");
const $storySummaryContainer = $(".story-summary-container");
const $formContainer = $(".form-container");
const $story = $(".story");
const $submitButton = $("#submit");
const $form = $("#story-form");





  /* FUNCTIONS */

  //Toggle story/form show/hide

  const toggleForm = () => {
    $storySummaryContainer.toggleClass("hide");
    $storyContainer.toggleClass("hide");
  }

  const toggleStory = () => {
    $formContainer.toggleClass("hide");
    $story.toggleClass("hide");
  };



 /* TESTING building an array from story to iterate over  */

  const story = 'Hello, my name is ${$propName} ! I have a ${$noun1} , ${$num1} ${$noun2} s, and a ${$noun3} . My biggest focus lately has been my ${$noun4} . ${$verb1} over ${$num2} hours a day has kept me ${$adj1} . Hopefully my ${$adj2} skills in ${$skill1} will get me a new ${$noun5} . My ${$fam1} thinks I am ${$feel1} and should be ${$verb2} instead.';

  let storyArray = story.split(" ");

  const storyFilter = (key) => {
    return key.includes("$") === true;
  }

  storyArray = storyArray.filter(storyFilter);

//  console.log(storyArray);


  // Switch Statement to Build FORM from above array

  for (const word of storyArray) {
    switch(word) {
      case "${$propName}" :
        $form.append(`<input class="input" type="text" id="propName" placeholder="[proper name]" maxlength="25" required> <br>`);
        break;

      case "${$noun1}" :
        $form.append(`<input class="input" type="text" id="noun1" placeholder="[noun]" maxlength="20" required> <br>`);
        break;

      case "${$noun2}" :
        $form.append(`<input class="input" type="text" id="noun2" placeholder="[noun]" maxlength="20" required> <br>`);
        break;

      case "${$noun3}" :
        $form.append(`<input class="input" type="text" id="noun3" placeholder="[noun]" maxlength="20" required> <br>`);
        break;

      case "${$noun4}" :
        $form.append(`<input class="input" type="text" id="noun4" placeholder="[noun]" maxlength="20" required> <br>`);
        break;

      case "${$noun5}" :
        $form.append(`<input class="input" type="text" id="noun5" placeholder="[noun]" maxlength="20" required> <br>`);
        break;

      case "${$adj1}" :
        $form.append(`<input class="input" type="text" id="adj1" placeholder="[adjective]" maxlength="20" required> <br>`);
        break;

      case "${$adj2}" :
        $form.append(`<input class="input" type="text" id="adj2" placeholder="[adjective]" maxlength="20" required> <br>`);
        break;

      case "${$adj3}" :
        $form.append(`<input class="input" type="text" id="adj3" placeholder="[adjective]" maxlength="20" required> <br>`);
        break;

      case "${$adj4}" :
        $form.append(`<input class="input" type="text" id="adj3" placeholder="[adjective]" maxlength="20" required> <br>`);
        break;

      case "${$adv1}" :
        $form.append(`<input class="input" type="text" id="adv1" placeholder="[adverb]" maxlength="20" required> <br>`);
        break;

      case "${$adv1}" :
        $form.append(`<input class="input" type="text" id="adv1" placeholder="[adverb]" maxlength="20" required> <br>`);
        break;

      case "${$adv2}" :
        $form.append(`<input class="input" type="text" id="adv2" placeholder="[adverb]" maxlength="20" required> <br>`);
        break;

      case "${$adv3}" :
        $form.append(`<input class="input" type="text" id="adv3" placeholder="[adverb]" maxlength="20" required> <br>`);
        break;

      case "${$verb1}" :
        $form.append(`<input class="input" type="text" id="verb1" placeholder="[verb ending in 'ing']" maxlength="20" required> <br>`);
        break;

      case "${$verb2}" :
        $form.append(`<input class="input" type="text" id="verb2" placeholder="[verb ending in 'ing']" maxlength="20" required> <br>`);
        break;

      case "${$verb3}" :
        $form.append(`<input class="input" type="text" id="verb3" placeholder="[verb ending in 'ing']" maxlength="20" required> <br>`);
        break;

      case "${$verb4}" :
        $form.append(`<input class="input" type="text" id="verb4" placeholder="[verb ending in 'ing']" maxlength="20" required> <br>`);
        break;

      case "${$num1}" :
        $form.append(`<input class="input" type="text" id="num1" placeholder="[number]" maxlength="20" required> <br>`);
        break;

      case "${$num2}" :
        $form.append(`<input class="input" type="text" id="num2" placeholder="[number]" maxlength="20" required> <br>`);
        break;

      case "${$num3}" :
        $form.append(`<input class="input" type="text" id="num3" placeholder="[number]" maxlength="20" required> <br>`);
        break;

      case "${$feel1}" :
        $form.append(`<input class="input" type="text" id="feel1" placeholder="[feeling (happy/etc)]" maxlength="20" required> <br>`);
        break;

      case "${$feel2}" :
        $form.append(`<input class="input" type="text" id="feel2" placeholder="[feeling (happy/etc)]" maxlength="20" required> <br>`);
        break;

      case "${$fam1}" :
        $form.append(`<input class="input" type="text" id="fam1" placeholder="[relative (sister/etc)]" maxlength="20" required> <br>`);
        break;

      case "${$fam2}" :
        $form.append(`<input class="input" type="text" id="fam2" placeholder="[relative (sister/etc)]" maxlength="20" required> <br>`);
        break;

      case "${$skill1}" :
        $form.append(`<input class="input" type="text" id="skill1" placeholder="[skill]" maxlength="20" required> <br>`);
        break;

      case "${$skill2}" :
        $form.append(`<input class="input" type="text" id="skill1" placeholder="[skill]" maxlength="20" required> <br>`);
        break;
      };
  };
  $form.append(`<button id="submit" type="button">Make My Story</button>`);
  $form.append(`<button class="return" type="button">Choose New Story</button>`);


  //Submit button action for FORM

  $("form").on("click", "#submit", (e) => {
    $("form").submit();

    let $propName = $("#propName").val();
    let $noun1 = $("#noun1").val();
    let $num1 = $("#num1").val();
    let $noun2 = $("#noun2").val();
    let $noun3 = $("#noun3").val();
    let $noun4 = $("#noun4").val();
    let $verb1 = $("#verb1").val();
    let $num2 = $("#num2").val();
    let $adj1 = $("#adj1").val();
    let $adj2 = $("#adj2").val();
    let $skill1 = $("#skill1").val();
    let $noun5 = $("#noun5").val();
    let $fam1 = $("#fam1").val();
    let $feel1 = $("#feel1").val();
    let $verb2 = $("#verb2").val();
    toggleStory();

    (e).preventDefault;

    /* Story Generator */

    $story.html(`<p class="story-text">&nbsp; Hello, my name is ${$propName} ! I have a ${$noun1} , ${$num1} ${$noun2} s, and a ${$noun3} . My biggest focus lately has been my ${$noun4} . ${$verb1} over ${$num2} hours a day has kept me ${$adj1} . Hopefully my ${$adj2} skills in ${$skill1} will get me a new ${$noun5} . My ${$fam1} thinks I am ${$feel1} and should be ${$verb2} instead. </p> <br>
    <button class="reset" type="button">Reset This Story</button>
    <button class="return" type="button">Choose New Story</button>`);

  })


  $storySummaryContainer.on("click", "#aboutMe", (e) => {
    toggleForm();
  });

  $story.on("click", ".reset", (e) => {
    toggleStory();
  });

  $story.on("click", ".return", (e) => {
    toggleStory();
    toggleForm();
  });

  $form.on("click", ".return", (e) => {
    toggleForm();
  });





});
