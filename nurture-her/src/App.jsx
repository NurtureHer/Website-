import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Founder from './pages/Founder';
import Team from './pages/Team';
import Navbar from './components/Layout/Navbar'; // Adjust if path is different
import Footer from './components/Layout/Footer'; // Adjust if path is different


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;