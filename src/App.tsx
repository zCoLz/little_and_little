import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import Contact from './pages/Contact';
import Payment from './Screens/Payment';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/event' element={<Event />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/booking' element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
