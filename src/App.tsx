import { Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import About from './components/About';
import Gallery from './components/Gallery';
import Support from './components/Support';
import Footer from './components/Footer';
import Backrooms from './components/Backrooms';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-void text-stone-200 selection:bg-electric/30 selection:text-white">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Gallery />
            <Support />
          </main>
          <Footer />
        </div>
      } />
      <Route path="/backrooms" element={<Backrooms />} />
    </Routes>
  );
}

export default App;
