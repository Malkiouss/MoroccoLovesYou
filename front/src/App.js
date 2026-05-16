import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

import Footer from './components/Footer';
import LanguageSelector from './components/languages/LanguageSelector';

import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Tours from './pages/Tours';
import Experiences from './pages/Experiences';
import VIP from './pages/VIP';
import WorldCup from './pages/WorldCup';
import Gallery from './pages/Gallery';
import CityDetailPage from './pages/CityDetailPage';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import StarBanner from './components/StarBanner';
import TourMiniBanner from './components/TourMiniBanner';
import Transportation from './pages/Transportation';
import UnityBanner from './components/UnityBanner';
import JewishHeritage from './pages/JewishHeritage';


function App() {
  useEffect(() => {
    const updateOffset = () => {
      const footer = document.querySelector('.footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const visibleHeight = Math.max(0, window.innerHeight - rect.top);
        document.documentElement.style.setProperty('--footer-offset', `${visibleHeight}px`);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', updateOffset);
          updateOffset();
        } else {
          window.removeEventListener('scroll', updateOffset);
          document.documentElement.style.setProperty('--footer-offset', '0px');
        }
      },
      { threshold: 0 }
    );

    const footer = document.querySelector('.footer');
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
      window.removeEventListener('scroll', updateOffset);
    };
  }, []);

  return (
    <LanguageProvider>
      <Router>

         <ScrollToTop />
         
        <div className="App">
          <LanguageSelector />
          <UnityBanner />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/vip" element={<VIP />} />
              <Route path="/worldcup" element={<WorldCup />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/:slug" element={<CityDetailPage />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/transportation" element={<Transportation />} />
              <Route path="/jewish-heritage" element={<JewishHeritage />} />
            </Routes>
            <StarBanner />
            <TourMiniBanner />
          </div>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

