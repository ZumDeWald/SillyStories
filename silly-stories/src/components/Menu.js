import React, { useState } from 'react';

const Menu = (props) => {

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

  return (
    <section id="menu" className="closed">
    <i className="fas fa-chevron-circle-down menu-icon rotate-90"
       onClick={() => {changeMenuState()}}></i>
      <ul className="menu-list">
        <li className="menu-item">
          Option 1
        </li>
        <li className="menu-item">
          Option 1
        </li>
        <li className="menu-item">
          Option 1
        </li>
        <li className="menu-item">
          Option 1
        </li>
      </ul>
    </section>
  );

}


export default Menu;