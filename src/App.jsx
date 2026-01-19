import React from 'react';
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import Show from './pages/Show'
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { MovieProvider } from './context/MovieContext';
function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="tv-show" element={<Show />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </MovieProvider>

  );
}
export default App;
