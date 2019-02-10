import React, { useState } from 'react';

const Menu = (props) => {

  const [menuOpen, setMenuChange] = useState(false);

  const changeMenuState = () => {
    (!!menuOpen) ? setMenuChange(false) : setMenuChange(true);
  };

  return (
    <section id="menu">
    <i className="fas fa-chevron-circle-down menu-open"
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
