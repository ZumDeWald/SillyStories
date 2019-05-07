import React from "react";

const Glossary = props => {
  return (
    <section id="glossary">
      <p className="header">Glossary</p>
      <h3 className="info">/ / Grammer Definitions</h3>
      <p className="definition">
        <strong>
          <u>adjective:</u>
        </strong>
        <span className="phonetic"> [aj-ik-tiv] </span>
        &nbsp; A class of words that modify nouns and pronouns, primarily by
        describing a particular quality of the word they are modifying. <br />{" "}
        <br />
        <strong>Example: </strong> Greg is a{" "}
        <span className="green">funny</span>,{" "}
        <span className="green">quiet</span> person.
      </p>

      <p className="definition">
        <strong>
          <u>adverb:</u>
        </strong>
        <span className="phonetic"> [ad-vərb] </span>
        &nbsp; A word or phrase that modifies or qualifies an adjective, verb,
        or other adverb, expressing a relation of place, time, circumstance,
        manner, cause, degree, etc. <br /> <br />
        <strong>Example: </strong> Sara moved{" "}
        <span className="green">quickly</span> across the playground,{" "}
        <span className="green">then</span> slowed{" "}
        <span className="green">quite rapidly</span>.
      </p>

      <p className="definition">
        <strong>
          <u>noun:</u>
        </strong>
        <span className="phonetic"> [noun] </span>
        &nbsp; A word (other than a pronoun) used to identify any of a class of
        people, places, or things ( common noun ), or to name a particular one
        of these ( proper noun ). <br /> <br />
        <strong>Example: </strong> <span className="green">Harriet</span> had a{" "}
        <span className="green">taco</span> for{" "}
        <span className="green">lunch</span>.
      </p>

      <p className="definition">
        <strong>
          <u>verb:</u>
        </strong>
        <span className="phonetic"> [verb] </span>
        &nbsp; A word used to describe an action, state, or occurrence, and
        forming the main part of the predicate of a sentence. <br /> <br />
        <strong>Example: </strong> Gary <span className="green">hurt</span> his
        knee, but <span className="green">will recover</span> quickly.
      </p>

      <h4>
        <em>*Definitions taken from Google Dictionary</em>
      </h4>
    </section>
  );
};

export default Glossary;
