import { useState } from 'react';
import NavBar from './NavBar';
import Clue from './Clue';
import useScavStore from '../stores/useScavStore';

const WordSearch = () => {
  const allSelectedCells = useScavStore((state) => state.allSelectedCells);
  const foundWords = useScavStore((state) => state.foundWords);
  const matrix = useScavStore((state) => state.matrix);
  const selectedWord = useScavStore((state) => state.selectedWord);
  const wordList = useScavStore((state) => state.wordList);
  const setAllSelectedCells = useScavStore(
    (state) => state.setAllSelectedCells
  );
  const setFoundWords = useScavStore((state) => state.setFoundWords);
  const setSelectedWord = useScavStore((state) => state.setSelectedWord);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedCells, setSelectedCells] = useState([]);
  const [gameWon, setGameWon] = useState(false);

  const handleMouseDown = (rowIndex, colIndex) => {
    setSelectedWord('');
    setIsMouseDown(true);
    setSelectedCells([{ row: rowIndex, col: colIndex }]);
  };

  const handleMouseUp = (id) => {
    setIsMouseDown(false);
    const word = selectedCells.map(({ row, col }) => matrix[row][col]).join('');
    setSelectedWord(word);

    const concatList = wordList.map((word) => word.replace(/\s/g, ''));
    if (concatList.includes(word)) {
      setFoundWords(foundWords, word);
      selectedCells.forEach((el) => {
        const selectedRow = Number(id.split('-').slice(1).at(0));
        const selectedCol = Number(id.split('-').slice(1).at(1));
        console.log({ selectedRow, selectedCol });
        if (el.row === selectedRow && el.col === selectedCol) {
          setAllSelectedCells(allSelectedCells, selectedCells);
          console.log({ word, selectedCells, allSelectedCells });
        }
      });
    }
    setSelectedCells([]);
    isGameWon();
  };

  const handleMouseEnter = (rowIndex, colIndex) => {
    if (isMouseDown) {
      setSelectedCells((prevCells) => [
        ...prevCells,
        { row: rowIndex, col: colIndex },
      ]);
    }
  };

  const isGameWon = () => {
    const crossedOff = document.querySelectorAll('.word-list-found-word');
    if (crossedOff.length === wordList.length - 1) setGameWon(true);
  };

  return (
    <>
      <NavBar />
      <section>
        <h1>Word Search</h1>
        <table className='word-search-list'>
          <tbody>
            <tr className='word-search-list-title'>Word List</tr>
            {wordList.map((word, i) => {
              const concatWord = word.replace(/\s/g, '');
              return (
                <tr
                  key={i}
                  className={`word-search-word ${
                    foundWords.includes(concatWord)
                      ? 'word-list-found-word'
                      : ''
                  } `}
                >
                  <td>{word}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table className='word-search-grid'>
          <tbody>
            {matrix.map((row, rowIndex) => (
              <tr key={rowIndex} className='word-search-grid-row'>
                {row.map((letter, colIndex) => {
                  const id = `${letter}-${rowIndex}-${colIndex}`;
                  let cellClassName = 'word-search-grid-letter';

                  const isFoundWord = allSelectedCells.some((innerArray) =>
                    innerArray.some(
                      (cell) => cell.row === rowIndex && cell.col === colIndex
                    )
                  );

                  if (isFoundWord) {
                    cellClassName += ' found-word';
                  }
                  return (
                    <td
                      key={colIndex}
                      id={`${letter}-${rowIndex}-${colIndex}`}
                      className={cellClassName}
                      onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                      onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                      onMouseUp={() => handleMouseUp(id)}
                    >
                      {letter}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {gameWon ? <Clue /> : null}
    </>
  );
};

export default WordSearch;
