import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

import Footer from './components/Footer';
import WhatsAppBanner from './components/WhatsAppBanner';
import LanguageSelector from './components/languages/LanguageSelector';

import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Tours from './pages/Tours';
import Experiences from './pages/Experiences';
import VIP from './pages/VIP';
import WorldCup from './pages/WorldCup';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <LanguageSelector />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/vip" element={<VIP />} />
            <Route path="/worldcup" element={<WorldCup />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <WhatsAppBanner />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

