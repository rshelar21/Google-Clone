
import React from 'react';
import { Routes,  Route } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import SearchPage from './pages/SearchPage';



function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/search' element={<SearchPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
