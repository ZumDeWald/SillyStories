import React, { useEffect, useState } from 'react';

import Switch from './Switch.js';

const Form = (props) => {

  /* Empty state variable that will be filled filtered story in Effect Hook below */
  const [filteredStory, setFilteredStory] = useState(null);

  /* Filter to match if argument has a "_" in it. This is used when filtering the story and looking for the words we will be replacing which are marked as "_noun1", "_adj1", etc */
  const keyFilter = (key) => {
    return key.includes("_") === true;
  }

  /* React Effect Hook used to parse the story each time this component is rendered */
  useEffect(() => {
   if (!props.story) {
     //Simply escape if there's no data
     return
   } else {
    /* Split story at every word break and then filter out the words to be replaced. Example: _noun1 */
    let storySplit = props.story.split(" ");
    let storyFiltered = storySplit.filter(keyFilter);
    setFilteredStory(storyFiltered);
   }
  })

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }


 return (
   <section>
     <h3 className="header-text bottom-line">Add your own fun to the story</h3>

     <form id="story-form" action="" method="post">

       <legend className="legend">Story: <em>{!props.story ? "Please Choose A Story" : props.storyName}</em></legend>

         {/* Conditional that maps over the filtered story list of words if it is present, or displays a simple message if it is empty/null */}
         {!!filteredStory ? filteredStory.map((word, index) => (
         Switch(word)
       )) : <p>Please select a story</p>}

       <button id="submit"
               type="button"
               onClick={(e) => {handleFormSubmit(e)}}>Make My Story!</button>

     </form>

   </section>
 );
}

export default Form;
