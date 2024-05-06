import React, { useState } from 'react';
import NavBar from './NavBar';
import Clue from './Clue';
import useScavStore from '../stores/useScavStore';

const Crossword = () => {
  const answerGrid = useScavStore((state) => state.answerGrid);
  const crossword = useScavStore((state) => state.crossword);
  const [currentCell, setCurrentCell] = useState({
    rowIndex: null,
    colIndex: null,
  });
  const grid = useScavStore((state) => state.grid);
  const setGrid = useScavStore((state) => state.setGrid);
  const setCrossword = useScavStore((state) => state.setCrossword);
  const crosswordInputValues = useScavStore(
    (state) => state.crosswordInputValues
  );
  const [gameWon, setGameWon] = useState(false);

  const placeClueNum = (rowIndex, colIndex) => {
    let supNum = null;
    crossword.map((clueData) => {
      if (clueData.row - 1 === rowIndex && clueData.col - 1 === colIndex) {
        supNum = <sup className='sup'>{clueData.clueNum}</sup>;
      }
    });
    return supNum;
  };

  const handleInput = (e, rowIndex, colIndex) => {
    const userLetter = e.target.value;

    const updatedGrid = [...grid];
    updatedGrid[rowIndex][colIndex] = userLetter;
    setGrid(updatedGrid);

    let nextRowIndex = rowIndex;
    let nextColIndex = colIndex;

    setCurrentCell({ rowIndex: nextRowIndex, colIndex: nextColIndex });
  };

  const crossOffClue = (obj) => {
    const updatedCrossword = crossword.map((item) => {
      if (item.clueNum === obj.clueNum) {
        return { ...item, solved: !item.solved };
      }
      return item;
      console.log('inside crossOffClue');
    });
    setCrossword(updatedCrossword);
  };

  const isGameWon = () => {
    for (let rowIndex = 0; rowIndex < answerGrid.length; rowIndex++) {
      for (
        let colIndex = 0;
        colIndex < answerGrid[rowIndex].length;
        colIndex++
      ) {
        if (
          answerGrid[rowIndex][colIndex] !==
          grid[rowIndex][colIndex].toUpperCase()
        ) {
          return false;
        }
      }
    }
    setGameWon(true);
    return true;
  };

  return (
    <>
      <NavBar />
      <section>
        <h1>Crossword Puzzle</h1>
        <table className='crossword-grid'>
          <tbody>
            {answerGrid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>
                    {placeClueNum(rowIndex, colIndex)}
                    {cell !== '' ? (
                      <input
                        id={`${rowIndex}${colIndex}`}
                        type='text'
                        maxLength='1'
                        value={grid[rowIndex][colIndex].toUpperCase()}
                        className='cell'
                        onChange={(e) => handleInput(e, rowIndex, colIndex)}
                        onFocus={() => setCurrentCell({ rowIndex, colIndex })}
                      />
                    ) : (
                      <div className='empty-cell'></div>
                    )}{' '}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className='crossword-button-container'>
          <button className='madlibs-button' onClick={() => isGameWon()}>
            Solve!
          </button>
          <p className='yay'>{gameWon ? 'Good Job, Ishy!!!!' : ''}</p>
        </div>
        <div className='crossword-clue-container'>
          <div className='down-title'>
            <h2>Down</h2>
            <ul>
              {crossword.map((obj) => {
                if (obj.direction === 'Down') {
                  return (
                    <li
                      key={obj.clueNum}
                      className={obj.solved ? 'solved' : ''}
                      onClick={() => crossOffClue(obj)}
                    >
                      {obj.clueNum}. {obj.clue}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
          <div className='across-title'>
            <h2>Across</h2>
            <ul>
              {crossword.map((obj) => {
                if (obj.direction === 'Across') {
                  return (
                    <li
                      key={obj.clueNum}
                      className={obj.solved ? 'solved' : ''}
                      onClick={() => crossOffClue(obj)}
                    >
                      {obj.clueNum}. {obj.clue}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>
        {gameWon ? <Clue /> : null}
      </section>
    </>
  );
};

export default Crossword;
