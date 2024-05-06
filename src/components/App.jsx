import Crossword from './Crossword.jsx';
import HomePage from './HomePage.jsx';
import SpotTheDifference from './SpotTheDifference';
import MadLibs from './MadLibs';
import NotFoundPage from './NotFoundPage';
import WordSearch from './WordSearch';
import { Route, Routes } from 'react-router-dom';
import Reactotron from 'reactotron-react-js';

const App = () => {
  return (
    <>
      <div className='routes-all'>
        <Routes>
          <Route
            path='happy-first-anniversary-ishypoo//'
            element={<HomePage />}
          ></Route>
          <Route path='/Crossword' element={<Crossword />}></Route>
          <Route
            path='/SpotTheDifference'
            element={<SpotTheDifference />}
          ></Route>
          <Route path='/MadLibs' element={<MadLibs />}></Route>
          <Route path='/NotFoundPage' element={<NotFoundPage />}></Route>
          <Route path='/WordSearch' element={<WordSearch />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
