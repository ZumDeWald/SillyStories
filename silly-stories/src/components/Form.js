import React from 'react';

const Form = (props) => {


 return (
   <section>
     <h3 className="header-text bottom-line selection-header">Add your own fun to the story</h3>
     <form id="form" action="">

       <legend className="legend">Story: <em>{props.storyName}</em></legend>


     </form>
   </section>
 );
}

export default Form;
