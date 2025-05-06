import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Edit from './pages/Edit';

function App() 
{
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/edit' element={ <Edit /> } />
      </Routes>
    </div>
  );
}

export default App;