import React, { useState } from 'react';

import Stories from './Stories.js';

const Menu = (props) => {

  //Destructuring
  const { resetStory, handleSetStory } = props

  const [menuOpen, setMenuChange] = useState(false);

  const changeMenuState = () => {
    (!!menuOpen) ?
    toggleMenu("close") :
    toggleMenu("open");
  };

  const toggleMenu = (menuState) => {
    const grabMenu = document.getElementById("menu");
    const grabList = document.getElementsByTagName("ul");
    const grabIcon = document.getElementsByClassName("menu-icon");
    if (menuState === "close") {
      grabMenu.classList.add("closed");
      grabMenu.classList.remove("open");
      grabList[0].classList.add("hidden");
      grabIcon[0].classList.remove("rotate-90");
      setMenuChange(false);
    } else {
      grabMenu.classList.remove("closed");
      grabMenu.classList.add("open");
      grabList[0].classList.remove("hidden");
      grabIcon[0].classList.add("rotate-90");
      setMenuChange(true);
    }
  }

  const mainMenu = () => {
    resetStory();
    changeMenuState();
  }

  const changeStory = (story) => {
    handleSetStory(story);
    changeMenuState();
  }

  return (
    <section id="menu" className="flex-col-center closed">
      <i className="fas fa-chevron-circle-down menu-icon"
         onClick={() => {changeMenuState()}}></i>
       <ul className="menu-list hidden">
        <li className="menu-item"
            onClick={mainMenu}>
          Main Menu
        </li>
        {Stories.map((story, index) => (
          <li className="menu-item"
              onClick={() => {changeStory(story)}}
              key={index}>
            {story[0]}
          </li>
        ))}
      </ul>
    </section>
  );

}


export default Menu;
