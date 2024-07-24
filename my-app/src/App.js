
import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Contact from './components/Contact';
import Reserve from './components/Reserve';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/reserve">Reserve</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </div>
  );
};

const Home = () => {
  return <h2>Welcome to Home Page</h2>;
};

export default App;
