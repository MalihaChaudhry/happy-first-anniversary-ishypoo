import React from 'react';
import { NavLink } from 'react-router-dom';
import Reactotron from 'reactotron-react-js';

import useScavStore from '../stores/useScavStore';

const NavBar = () => {
  const page = useScavStore((state) => state.page);
  const setPage = useScavStore((state) => state.setPage);

  return (
    <>
      <nav>
        <ul>
          <NavLink to='/happy-first-anniversary-ishypoo/'>
            <li className='navHome'>
              <img src='images/icons8-home-50.png' alt='link to Home'></img>
            </li>
          </NavLink>
          <NavLink to='/happy-first-anniversary-ishypoo/Crossword'>
            <li className='navCrossword'>
              <img
                src='images/icons8-crossword-64.png'
                alt='link to Crossword Puzzle'
              ></img>
            </li>
          </NavLink>
          <NavLink to='/happy-first-anniversary-ishypoo/SpotTheDifference'>
            <li className='navSpotTheDifference'>
              <img
                src='images/icons8-magnifying-glass-50.png'
                alt='link to I Spy'
              ></img>
            </li>
          </NavLink>
          <NavLink to='/happy-first-anniversary-ishypoo/MadLibs'>
            <li className='navMadLibs'>
              <img src='images/icons8-note-50.png' alt='link to MadLibs'></img>
            </li>
          </NavLink>
          <NavLink to='/happy-first-anniversary-ishypoo/WordSearch'>
            <li className='navWordSearch'>
              <img
                src='images/icons8-letters-64.png'
                alt='link to Word Search'
              ></img>
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
