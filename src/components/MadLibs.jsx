import React, { useState } from 'react';
// import useScavStore from '../stores/useScavStore';
import NavBar from './NavBar';
import Clue from './Clue';

function MadLibs() {
  const [showStory, setShowStory] = useState(false);
  const [userInputs, setUserInputs] = useState({
    noun1: '',
    noun2: '',
    noun3: '',
    noun4: '',
    nounMultiple1: '',
    nounMultiple2: '',
    nounMultiple3: '',
    nounMultiple4: '',
    adjective1: '',
    adjective2: '',
    adjective3: '',
    adjective4: '',
    verb1: '',
    verb2: '',
    verbIng1: '',
    verbIng2: '',
    verbIng3: '',
    verbIng4: '',
    verbIng5: '',
    verbIng6: '',
    verbEd1: '',
    verbEd2: '',
    location1: '',
    location2: '',
    location3: '',
    typeOfPerson: '',
    adverb: '',
    bodilyFluid: '',
    food1: '',
    food2: '',
    food3: '',
    feeling1: '',
    physicalTrait: '',
    event: '',
    talent: '',
    question: '',
    termOfEndearment: '',
    somethingYouCallMe: '',
  });

  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setUserInputs(() => ({
      ...userInputs,
      [name]: value,
    }));
  };

  const handleShowStory = () => {
    setShowStory(!showStory);
  };

  const story = `Instead of buying you another ${userInputs.noun1} or ${userInputs.noun2}, I thought I'd put the credit card away, go old school, and write you a letter for our first anniversary!
  
  I know we will have shoeboxes full of romantic notes stashed away in the closest ${userInputs.location1} and I know we've been together since ${userInputs.nounMultiple1} and ${userInputs.nounMultiple2} were cool, but I just wanted to make sure you know, one year on, how much I ${userInputs.adverb} ${userInputs.feeling} you.
  
  One year! One year of ${userInputs.verbIng1} together and ${userInputs.verbIng2} together and ${userInputs.verbIng3} together.
  
  One year of perfectly cooked ${userInputs.food1} and ${userInputs.verbIng4} tv shows and cleaning ${userInputs.nounMultiple3}! Man, I look at our photos from the year and see the ones where we ${userInputs.verbEd1} in/at/to the ${userInputs.location2} and ${userInputs.verbEd2} in/at/to the ${userInputs.location3}.
  
  But the way you ${userInputs.verb1} up a ${userInputs.food2} and ${userInputs.verb2} a/an ${userInputs.event} never gets old, and never ceases to amaze me. I know you're probably ${userInputs.verbIng5} your heart and wiping away your ${userInputs.bodilyFluid} reading this right now, but I want you to know how I feel.
  
  I am in awe of your ${userInputs.talent}. I am humbled by your ${userInputs.adjective1} yet ${userInputs.adjective2} ${userInputs.food3}. Your ${userInputs.verbIng6} skills are superhuman (in a good way). You should know, despite the ${userInputs.adjective3} fight we had over the ${userInputs.nounMultiple4}, this has been a beautfiul start to our life together.
  
  Every second that ticks by, I think - God, I'm one lucky ${userInputs.physicalTrait} ${userInputs.typeOfPerson} to have found you.
  
  At night, before I put down my phone to go to sleep, I look over at your ${userInputs.adjective4} face, and think, ${userInputs.question}? Happy First Anniversary, ${userInputs.termOfEndearment}.

  Love,
  ${userInputs.somethingYouCallMe}

  P.S. The letter was fun, right? But next year I'll get you ${userInputs.noun3} or, at least a ${userInputs.noun4}.`;

  return (
    <div>
      <NavBar />
      <section>
        <h1>Mad Libs</h1>
        <h2>
          Fill out the boxes below with the appropriate words. When you click
          "Tell Me A Story!", your completed story will appear!
        </h2>
        <div className='form-container'>
          <form>
            <input
              type='text'
              name='noun1'
              placeholder='Noun'
              value={userInputs.noun1}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='noun2'
              placeholder='Noun'
              value={userInputs.noun2}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='noun3'
              placeholder='Noun'
              value={userInputs.noun3}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='noun4'
              placeholder='Noun'
              value={userInputs.noun4}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='nounMultiple1'
              placeholder='Noun (multiple)'
              value={userInputs.nounMultiple1}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='nounMultiple2'
              placeholder='Noun (multiple)'
              value={userInputs.nounMultiple2}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='nounMultiple3'
              placeholder='Noun (multiple)'
              value={userInputs.nounMultiple3}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='nounMultiple4'
              placeholder='Noun (multiple)'
              value={userInputs.nounMultiple4}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='adjective1'
              placeholder='Adjective'
              value={userInputs.adjective1}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='adjective2'
              placeholder='Adjective'
              value={userInputs.adjective2}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='adjective3'
              placeholder='Adjective'
              value={userInputs.adjective3}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='adjective4'
              placeholder='Adjective'
              value={userInputs.adjective4}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='verb1'
              placeholder='Verb'
              value={userInputs.verb1}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='verb2'
              placeholder='Verb'
              value={userInputs.verb2}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='verbIng1'
              placeholder='Verb (ending in -ing)'
              value={userInputs.verbIng1}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='verbIng2'
              placeholder='Verb (ending in -ing)'
              value={userInputs.verbIng2}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='verbIng3'
              placeholder='Verb (ending in -ing)'
              value={userInputs.verbIng3}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='verbIng4'
              placeholder='Verb (ending in -ing)'
              value={userInputs.verbIng4}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='verbIng5'
              placeholder='Verb (ending in -ing)'
              value={userInputs.verbIng5}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='verbIng6'
              placeholder='Verb (ending in -ing)'
              value={userInputs.verbIng6}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='verbEd1'
              placeholder='Verb (ending in -ed)'
              value={userInputs.verbEd1}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='verbEd2'
              placeholder='Verb (ending in -ed)'
              value={userInputs.verbEd2}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='location1'
              placeholder='Location'
              value={userInputs.location1}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='location2'
              placeholder='Location'
              value={userInputs.location2}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='location3'
              placeholder='Location'
              value={userInputs.location3}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='typeOfPerson'
              placeholder='typeOfPerson'
              value={userInputs.typeOfPerson}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='adverb'
              placeholder='Adverb'
              value={userInputs.adverb}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='bodilyFluid'
              placeholder='Bodily Fluid'
              value={userInputs.bodilyFluid}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='food1'
              placeholder='Food'
              value={userInputs.food1}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='food2'
              placeholder='Food'
              value={userInputs.food2}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='food3'
              placeholder='Food'
              value={userInputs.food3}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='feeling'
              placeholder='Feeling'
              value={userInputs.feeling}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='physicalTrait'
              placeholder='Physical Trait'
              value={userInputs.physicalTrait}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='event'
              placeholder='Event'
              value={userInputs.event}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='talent'
              placeholder='Talent'
              value={userInputs.talent}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='question'
              placeholder='Question'
              value={userInputs.question}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='termOfEndearment'
              placeholder='Term Of Endearment'
              value={userInputs.termOfEndearment}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='somethingYouCallMe'
              placeholder='Something You Call Me'
              value={userInputs.somethingYouCallMe}
              onChange={handleInputChange}
            />
          </form>
        </div>
        <div className='button-container'>
          <button onClick={handleShowStory} className='madlibs-button'>
            Tell Me A Story!
          </button>
        </div>
        <div className='story-container'>
          {showStory && <p className='story'>{story}</p>}
        </div>
        <div className='button-container'>{showStory && <Clue />}</div>
      </section>
    </div>
  );
}

export default MadLibs;
