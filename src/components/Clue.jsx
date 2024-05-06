import { useState } from 'react';
import useScavStore from '../stores/useScavStore';

const Clue = () => {
  // const [clues, setClues] = useState(['y', 'e', 'e', 't']);
  const [showClue, setShowClue] = useState(false);
  const [pickedClue, setPickedClue] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const clues = useScavStore((state) => state.clues);
  const setClues = useScavStore((state) => state.setClues);

  const handleShowClue = () => {
    if (clues.length === 0) setClues(['Y', 'E', 'E', 'T']);
    const pickOne = Math.floor(Math.random() * clues.length);
    const pickedClue = clues[pickOne];
    setPickedClue(pickedClue);
    const updatedClues = [...clues];
    updatedClues.splice(pickOne, 1);
    setClues(updatedClues);
    setShowClue(true);
    if (showClue) {
      return pickedClue;
    }
    setButtonClicked(true);
  };

  return (
    <>
      <section>
        <div className='form-container'>
          <div className='button-container'>
            <button
              onClick={handleShowClue}
              disabled={buttonClicked}
              className='madlibs-button'
            >
              Clue!
            </button>
          </div>
        </div>
        <div className='clue-div'>
          {showClue && <p className='clue-text'>{pickedClue}</p>}
        </div>
      </section>
    </>
  );
};

export default Clue;
