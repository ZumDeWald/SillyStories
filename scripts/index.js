$(document).ready(() => {


  /* VARIABLES */

const $storyContainer = $(".story-container");
const $storySummaryContainer = $(".story-summary-container");
const $formContainer = $(".form-container");
const $story = $(".story");
const $storyText = $(".story-text");
const $submitButton = $("#submit");
const $form = $("#story-form");

let tracker = "";
let choiceArray = "";




// Stories to iterate over

const aboutMe = 'Hello, my name is ${$propName} ! I have a ${$noun1} , ${$num1} ${$noun2} s, and a ${$noun3} . My biggest focus lately has been my ${$noun4} . ${$verb1} over ${$num2} hours a day has kept me ${$adj1} . Hopefully my ${$adj2} skills in ${$skill1} will get me a new ${$noun5} . My ${$fam1} thinks I am ${$feel1} and should be ${$verb2} instead.';


const favoriteGame = 'My favorite game has ${$num1} ${$noun1} s, ${$num2} ${$noun2} s, and a very ${$adj1} ${$noun3} ! You can play it with your ${$fam1} , or a friend. Don\'t ${$verb1} too close to the ${$adj2} ${$noun1} or you\'re ${$adv1} out!';


//Toggles to return to story form or return to story selections
 $storySummaryContainer.on("click", "#aboutMe", (e) => {
   currentStory.toggleForm();
   tracker = true;
   switcher();
 });

 $storySummaryContainer.on("click", "#favoriteGame", (e) => {
   currentStory.toggleForm();
   tracker = false;
   switcher();
 });

 $story.on("click", ".reset", (e) => {
   currentStory.toggleStory();
 });

 $story.on("click", ".return", (e) => {
   currentStory.toggleStory();
   currentStory.toggleForm();
 });

 $form.on("click", ".return", (e) => {
   currentStory.toggleForm();
 });




  /* Story Object */
  class Story {

    constructor (storyName) {
      this.story1 = aboutMe;
      this.storySplit1 = (this.story1).split(" ");
      this.storyArray1 = this.storySplit1.filter(this.keyFilter);

      this.story2 = favoriteGame;
      this.storySplit2 = (this.story2).split(" ");
      this.storyArray2 = this.storySplit2.filter(this.keyFilter);

    }

    keyFilter (key) {
      return key.includes("$") === true;
    }

    //Toggle story/form show/hide

    toggleForm ()  {
      $storySummaryContainer.toggleClass("hide");
      $storyContainer.toggleClass("hide");
    }

    toggleStory () {
      $formContainer.toggleClass("hide");
      $story.toggleClass("hide");
    };

  }


 //Call Story Object constructor

 const currentStory = new Story();




  // Switch Statement to Build FORM from above array

const switcher = () => {

  $storyText.text("");
  $form.html(`<legend class="legend">Story: <em>About Me</em></legend>`);

  if (tracker) {
    choiceArray = currentStory.storyArray1;
  } else {
    choiceArray = currentStory.storyArray2;
  }

  for (const word of choiceArray) {
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
        $form.append(`<input class="input" type="text" id="adj4" placeholder="[adjective]" maxlength="20" required> <br>`);
        break;

      case "${$adv1}" :
        $form.append(`<input class="input" type="text" id="adv1" placeholder="[adverb]" maxlength="20" required> <br>`);
        break;

      case "${$verb1}" :
        $form.append(`<input class="input" type="text" id="verb1" placeholder="[verb]" maxlength="20" required> <br>`);
        break;

      case "${$verb2}" :
        $form.append(`<input class="input" type="text" id="verb2" placeholder="[verb]" maxlength="20" required> <br>`);
        break;

      case "${$num1}" :
        $form.append(`<input class="input" type="text" id="num1" placeholder="[number]" maxlength="20" required> <br>`);
        break;

      case "${$num2}" :
        $form.append(`<input class="input" type="text" id="num2" placeholder="[number]" maxlength="20" required> <br>`);
        break;

      case "${$feel1}" :
        $form.append(`<input class="input" type="text" id="feel1" placeholder="[feeling (happy/etc)]" maxlength="20" required> <br>`);
        break;

      case "${$fam1}" :
        $form.append(`<input class="input" type="text" id="fam1" placeholder="[relative (sister/etc)]" maxlength="20" required> <br>`);
        break;

      case "${$skill1}" :
        $form.append(`<input class="input" type="text" id="skill1" placeholder="[skill]" maxlength="20" required> <br>`);
        break;
      };
  };
  $form.append(`<button id="submit" type="button">Make My Story</button>`);
  $form.append(`<button class="return" type="button">Choose New Story</button>`);

}


  //Submit button action for FORM

  $("form").on("click", "#submit", (e) => {
    $("form").submit();

    let $propName = $("#propName").val();
    let $num1 = $("#num1").val();
    let $num2 = $("#num2").val();
    let $noun1 = $("#noun1").val();
    let $noun2 = $("#noun2").val();
    let $noun3 = $("#noun3").val();
    let $noun4 = $("#noun4").val();
    let $noun5 = $("#noun5").val();
    let $verb1 = $("#verb1").val();
    let $verb2 = $("#verb2").val();
    let $adj1 = $("#adj1").val();
    let $adj2 = $("#adj2").val();
    let $adj3 = $("#adj3").val();
    let $adj4 = $("#adj4").val();
    let $adv1 = $("#adv1").val();
    let $skill1 = $("#skill1").val();
    let $fam1 = $("#fam1").val();
    let $feel1 = $("#feel1").val();

    (e).preventDefault;

    if (tracker) {

    $storyText.text(`Hello, my name is ${$propName} ! I have a ${$noun1} , ${$num1} ${$noun2} (s), and a ${$noun3} . My biggest focus lately has been my ${$noun4} . ${$verb1} (ing) over ${$num2} hours a day has kept me ${$adj1} . Hopefully my ${$adj2} skills in ${$skill1} will get me a new ${$noun5} . My ${$fam1} thinks I am ${$feel1} and should ${$verb2} instead.`);

  } else {
    $storyText.text(`My favorite game has ${$num1} ${$noun1} (s), ${$num2} ${$noun2} (s), and a very ${$adj1} ${$noun3} ! You can play it with your ${$fam1} or a friend. Don\'t ${$verb1} too close to the ${$adj2} ${$noun1} or you\'re ${$adv1} out!`);

  }

    currentStory.toggleStory();

  })



});
