import React, {useState} from 'react';

import Stories from './Stories.js';

const Menu = ({handleChangeDisplay, handleSetStory}) => {
  /* React State Hook used to set wether menu is open and provides a method to change the state */
  const [menuOpen, setMenuOpen] = useState(false);

  /* Function to switch between which component is displayed and close menu. */
  const changeDisplay = component => {
    handleChangeDisplay(component);
    setMenuOpen(false);
  };

  /* Function to change the story in state and close menu */
  const changeStory = (story, component) => {
    handleSetStory(story, component);
    setMenuOpen(false);
  };

  return (
    <section
      id='menu'
      className={!!menuOpen ? 'flex-col-center' : 'flex-col-center closed'}>
      <i
        className={
          !!menuOpen
            ? 'fas fa-chevron-circle-down menu-icon rotate-90'
            : 'fas fa-chevron-circle-down menu-icon'
        }
        onClick={() => {
          !!menuOpen ? setMenuOpen(false) : setMenuOpen(true);
        }}
      />
      <ul className='menu-list'>
        <li
          className='menu-item'
          onClick={() => {
            changeDisplay('Selection');
          }}>
          Main Menu
        </li>
        <li
          className='menu-item'
          onClick={() => {
            changeDisplay('Glossary');
          }}>
          Glossary
        </li>
        {/* Map over all stories in Stories array and add each to the menu */}
        {Stories.map((story, index) => (
          <li
            className='menu-item'
            onClick={() => {
              changeStory(story, 'Story');
            }}
            key={index}>
            {story[0]}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
