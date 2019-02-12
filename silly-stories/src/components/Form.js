import React, { useEffect } from 'react';

const Form = (props) => {

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
    return storyFiltered;
   }
  })

 return (
   <section>
     <h3 className="header-text bottom-line">Add your own fun to the story</h3>
     <form id="form" action="">

       <legend className="legend">Story: <em>{props.storyName}</em></legend>


     </form>
   </section>
 );
}

export default Form;
