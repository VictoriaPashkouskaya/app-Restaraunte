import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Reserve from './components/Reserve';
import Menu from './components/Menu';
import Header from './components/Header';
import NavButtons from './components/NavButtons';
import ThankYou from './components/ThankYou';
import './CalendarCustom.css';

const App = () => {
  const dishes = [
    { id: 1, name: 'Plato 1', description: 'Este es el plato 1', price: 10 },
    { id: 2, name: 'Plato 2', description: 'Este es el plato 2', price: 20 },
    { id: 3, name: 'Plato 3', description: 'Este es el plato 3', price: 15 },
  ];

  return (
    <div>
      <Header />
      <NavButtons />
      <Routes>
        <Route path="/" element={<h1>Welcome to our Restaurant</h1>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/menu" element={<Menu dishes={dishes} />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
};

export default App;
