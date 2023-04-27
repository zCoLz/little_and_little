import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import Contact from './pages/Contact';
import bg from './img/bg.png';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/event' element={<Event />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
