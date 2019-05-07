import React, { useState } from "react";

import Stories from "./Stories.js";

const Menu = props => {
  //Destructuring
  const { handleChangeDisplay, handleSetStory } = props;

  /* React State Hook used to set wether menu is open and provides a method to change the state */
  const [menuOpen, setMenuChange] = useState(false);

  /* Toggles menu state between open and closed. Detailed steps in toggleMenu function below */
  const changeMenuState = () => {
    !!menuOpen ? toggleMenu("close") : toggleMenu("open");
  };

  /* Function to open or close the menu depending on which is passed down from changeMenuState function above. This function handles opening/closing the menu box, displaying/hiding the menu options, and rotating the menu icon (arrow). This also updates the state to reflect that the menu is open or closed, so the above function adapts properly. */
  const toggleMenu = menuState => {
    const grabMenu = document.getElementById("menu");
    const grabList = document.getElementsByTagName("ul");
    const grabIcon = document.getElementsByClassName("menu-icon");
    if (menuState === "close") {
      // Steps to CLOSE the menu
      grabMenu.classList.add("closed");
      grabMenu.classList.remove("open");
      grabList[0].classList.add("hidden");
      grabIcon[0].classList.remove("rotate-90");
      setMenuChange(false);
    } else {
      // Steps to OPEN the menu
      grabMenu.classList.remove("closed");
      grabMenu.classList.add("open");
      grabList[0].classList.remove("hidden");
      grabIcon[0].classList.add("rotate-90");
      setMenuChange(true);
    }
  };

  /* Function to switch between which component is displayed and close menu. */
  const changeDisplay = component => {
    handleChangeDisplay(component);
    changeMenuState();
  };

  /* Function to change the story in state and close menu */
  const changeStory = (story, component) => {
    handleSetStory(story, component);
    changeMenuState();
  };

  return (
    <section id="menu" className="flex-col-center closed">
      <i
        className="fas fa-chevron-circle-down menu-icon hover-hand"
        onClick={() => {
          changeMenuState();
        }}
      />
      <ul className="menu-list hidden">
        <li
          className="menu-item hover-hand"
          onClick={() => {
            changeDisplay("Selection");
          }}
        >
          Main Menu
        </li>
        <li
          className="menu-item hover-hand"
          onClick={() => {
            changeDisplay("Glossary");
          }}
        >
          Glossary
        </li>
        {/* Map over all stories in Stories array and add each to the menu */}
        {Stories.map((story, index) => (
          <li
            className="menu-item hover-hand"
            onClick={() => {
              changeStory(story, "Story");
            }}
            key={index}
          >
            {story[0]}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
