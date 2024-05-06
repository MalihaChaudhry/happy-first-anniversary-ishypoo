import React from 'react';
import { NavLink } from 'react-router-dom';
import Reactotron from 'reactotron-react-js';
import NavBar from './NavBar';

import useScavStore from '../stores/useScavStore';

const HomePage = () => {
  const page = useScavStore((state) => state.page);
  const setPage = useScavStore((state) => state.setPage);

  return (
    <>
      <NavBar />

      <section>
        <h1 className='intro'>Happy First Anniversary Ishypoo!</h1>
        <h2>Game Edition</h2>
        <input
          className='modal-btn'
          type='checkbox'
          id='modal-btn'
          name='modal-btn'
        />
        <label for='modal-btn'>
          Instructions <i className='uil uil-expand-arrows'></i>
        </label>
        <div className='modal'>
          <div className='modal-wrap'>
            <img src='images/shaadi-picture-wellesley-1.png' alt='' />
            <p>
              Ishypoo,
              <br></br>
              <br></br>
              Play each of the four games and you will receive a Letter as a
              clue. Once you've found all the letters, unscramble them and
              you'll find a hint as to your anniversary present!
              <br></br>
              <br></br>
              Have fun, jaan - and Happy Anniversary!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
