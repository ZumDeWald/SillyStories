import React from 'react';
import Stories from './Stories.js';

const Selection = (props) => {


  return (
    <section id="selection" className="flex-col-center">
      <h3 className="header-text bottom-line selection-header">Choose your adventure</h3>
      <ul className="no-list-style selection-list">
        <li className="selection-list-item flex-col-center"
            value={Stories.aboutMe}>
          About Me
        </li>
        <li className="selection-list-item flex-col-center"
            value={Stories.aboutMe}>
          About Me
        </li>
        <li className="selection-list-item flex-col-center"
            value={Stories.favoriteGame}>
          Favorite Game
        </li>
        <li className="selection-list-item flex-col-center"
            value={Stories.aboutMe}>
          About Me
        </li>
        <li className="selection-list-item flex-col-center"
            value={Stories.aboutMe}>
          About Me
        </li>
        <li className="selection-list-item flex-col-center"
            value={Stories.aboutMe}>
          About Me
        </li>
        <li className="selection-list-item flex-col-center"
            value={Stories.aboutMe}>
          About Me
        </li>
        <li className="selection-list-item flex-col-center"
            value={Stories.aboutMe}>
          About Me
        </li>
        <li className="selection-list-item flex-col-center"
            value={Stories.aboutMe}>
          About Me
        </li>
        <li className="selection-list-item flex-col-center"
            value={Stories.favoriteGame}>
          Favorite Game
        </li>
      </ul>
    </section>
  );
}

export default Selection
