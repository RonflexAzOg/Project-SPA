import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Tenor from './Tenor/Tenor';
import Giphy from './Giphy/Giphy';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Tenor' element={<Tenor />}/>
        <Route path='/Giphy' element={<Giphy />} />
        <Route path='*' elementr={<NotFound />} />
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;
