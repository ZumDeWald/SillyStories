import React, { useState } from 'react';

const Menu = (props) => {

  //Destructuring
  const { resetStory } = props

  const [menuOpen, setMenuChange] = useState(false);

  const changeMenuState = () => {
    (!!menuOpen) ?
    toggleMenu("close") :
    toggleMenu("open");
  };

  const toggleMenu = (menuState) => {
    const grabMenu = document.getElementById("menu");
    const grabIcon = document.getElementsByClassName("menu-icon");
    if (menuState === "close") {
      grabMenu.classList.add("closed");
      grabIcon[0].classList.add("rotate-90");
      setMenuChange(false);
    } else {
      grabMenu.classList.remove("closed");
      grabIcon[0].classList.remove("rotate-90");
      setMenuChange(true);
    }
  }

  const handleResetStory = () => {
    resetStory();
    changeMenuState();
  }

  return (
    <section id="menu" className="closed">
    <i className="fas fa-chevron-circle-down menu-icon rotate-90"
       onClick={() => {changeMenuState()}}></i>
      <ul className="menu-list">
        <li className="menu-item"
            onClick={handleResetStory}>
          Choose new story
        </li>
        <li className="menu-item">
          Option 2
        </li>
        <li className="menu-item">
          Option 3
        </li>
        <li className="menu-item">
          Option 4
        </li>
      </ul>
    </section>
  );

}


export default Menu;
