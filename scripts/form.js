$(document).ready(() => {

  /* VARIABLES */

const $form = $(".form-container");
const $story = $(".story");
const $submitButton = $("#submit");




  /* FUNCTIONS */

  //Toggle story/form show/hide

  const toggleStory = () => {
    $form.toggleClass("hide");
    $story.toggleClass("hide");
  };


  //Submit button action

  $submitButton.click((e) => {
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
    let $skill = $("#skill").val();
    let $noun5 = $("#noun5").val();
    let $relative = $("#relative").val();
    let $feeling = $("#feeling").val();
    let $verb2 = $("#verb2").val();
    toggleStory();

    (e).preventDefault;

    /* Story Generator */

    $story.html(`<p class="story-text">&nbsp; Hello, my name is ${$propName}! I have a ${$noun1}, ${$num1} ${$noun2}s, and a ${$noun3}. My biggest focus lately has been my ${$noun4}. ${$verb1} over ${$num2} hours a day has kept me ${$adj1}. Hopefully my killer  ${$adj2} skills in ${$skill} will get me a new ${$noun5}. My ${$relative} thinks I am ${$feeling} and should be ${$verb2} instead. </p> <br>
    <button class="reset" type="button">Make A New Story</button>`);

  })

  $story.on("click", ".reset", (e) => {
    toggleStory();
  });



/*
About Me

Hello, my name is Eric! I have a wife, two kids, and a house. My biggest focus lately has been my NanoDegree. Working over 10 hours a day has kept me busy. Hopefully my new skills in Web Dev will get me a new job. My sister thinks I am crazy and should be playing instead.
*/



});
