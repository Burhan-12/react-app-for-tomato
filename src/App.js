// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Farmer from './pages/Farmer';
import Trader from './pages/Trader';
import Transport from './pages/Transport'; // Renamed Transport to Transporter
import Homepage from './pages/Homepage'; // Added Homepage import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/trader" element={<Trader />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
