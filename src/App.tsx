import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import Contact from './pages/Contact';
import Payment from './Screens/Payment';
import DetailsEvent from './Screens/DetailsEvent';
import QRPayment from './Screens/QRPayment';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/event' element={<Event />} />
        <Route path='/event/xem-chi-tiet' element={<DetailsEvent />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/booking' element={<Payment />} />
        <Route path='/booking/payment' element={<QRPayment />} />
      </Routes>
    </div>
  );
}

export default App;
