// src/App.jsx
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Contact from './pages/Contact';
import Projetct from './pages/Project';
import Graphics from './pages/Graphics';
import Cursor from './components/cursor';

import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);


  return (
    <div className="block w-full bg-[#020013]">
      <Cursor />
      {/* Add your custom cursor component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projetct />} />
        <Route path="/graphics" element={<Graphics />} />
      </Routes>
    </div>
  );
}

export default App;