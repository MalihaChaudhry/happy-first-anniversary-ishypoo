import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Clue from './Clue';
import useScavStore from '../stores/useScavStore';

const SpotTheDifference = () => {
  const differences = useScavStore((state) => state.differences);
  const score = useScavStore((state) => state.score);
  const setDifferences = useScavStore((state) => state.setDifferences);
  const setScore = useScavStore((state) => state.setScore);
  const [gameWon, setGameWon] = useState(false);

  const isDiff = (userX, userY) => {
    return differences.map((obj, i) => {
      if (
        userX >= obj.x &&
        userX <= obj.x + obj.w &&
        userY >= obj.y &&
        userY <= obj.y + obj.h
      ) {
        const updatedDifferences = [...differences];
        updatedDifferences[i].isFound = true;
        setDifferences(updatedDifferences);
      }
    });
  };

  const handleClick = (e) => {
    const clickedX = e.nativeEvent.offsetX;
    const clickedY = e.nativeEvent.offsetY;

    if (isDiff(clickedX, clickedY)) {
      const diffsFound = differences.filter((obj) => obj.isFound === true);
      const newScore = diffsFound.length;
      setScore(newScore);
    }
    isGameWon();
  };

  const isGameWon = () => {
    if (differences.every((obj) => obj.isFound === true)) {
      setGameWon(true);
    }
  };

  const addCircle = (e) => {
    console.log(e);
  };

  return (
    <>
      <NavBar />
      <section>
        <h1>Spot the Difference</h1>
        <h2>
          There are 10 differences! Click on the bottom image when you find a
          difference!
        </h2>
        <img
          src='./happy-first-anniversary-ishypoo/images/SpotTheDifference.png'
          alt='A picturing of two kayaking scenes, with 10 differences between the two images'
          onClick={(e) => handleClick(e)}
        />

        <div className='score-container'>
          <p className='score'>
            {gameWon
              ? 'YOU FOUND ALL THE DIFFERENCES! GOOD JOB ISHYPOO!!'
              : `${score}/10 Differences Found`}
          </p>
        </div>
        {gameWon ? <Clue /> : null}
      </section>
    </>
  );
};

export default SpotTheDifference;
