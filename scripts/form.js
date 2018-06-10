$(document).ready(() => {

  /* VARIABLES */
let $propName = "";
let $adj1 = "";
let $adj2 ="";
let $verb = "";
let $adv = "";


const $submitButton = $("#submit");
const $story = $(".story");




  /* FUNCTIONS */

  $submitButton.click((e) => {
    $("form").submit();
    $propName = $("#propName").val();
    $adj1 = $("#adj1").val();
    $adj2 = $("#adj2").val();
    $verb = $("#verb").val();
    $adv = $("#adv").val();
//    console.log($propName);
    (e).preventDefault;

    /* Story Generator */

    $story.html("<p> Hello, my name is " + $propName + ". I have a " + $adj1 + " car and a " + $adj2 + " house. I " + $verb + " very " + $adv + "!");

  })







});
