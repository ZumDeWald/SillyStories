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

  const mainMenu = (component) => {
    resetStory(component);
    changeMenuState();
  }

  const changeStory = (story, component) => {
    handleSetStory(story, component);
    changeMenuState();
  }

  return (
    <section id="menu" className="flex-col-center closed">
      <i className="fas fa-chevron-circle-down menu-icon hover-hand"
         onClick={() => {changeMenuState()}}></i>
       <ul className="menu-list hidden">
        <li className="menu-item hover-hand"
            onClick={() => {mainMenu("Selection")}}>
          Main Menu
        </li>
        <li className="menu-item hover-hand"
            onClick={() => {mainMenu("Glossary")}}>
          Glossary
        </li>
        {Stories.map((story, index) => (
          <li className="menu-item hover-hand"
              onClick={() => {changeStory(story, "Story")}}
              key={index}>
            {story[0]}
          </li>
        ))}
      </ul>
    </section>
  );

}


export default Menu;
