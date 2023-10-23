import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFoundPage from './pages/404page';
import Feature from './pages/Feature';
import Roadmap from './pages/Roadmap';
import Service from './pages/Service';
import Token from './pages/Token';
import Faqs from './pages/Faqs';

function App() {
  return (
    <div className="App">
     <Router>
     <Header />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="*" element={<NotFoundPage />} />
       <Route path="/feature" element={<Feature />} />
       <Route path="/roadmap" element={<Roadmap />} />
       <Route path="/service" element={<Service />} />
       <Route path="/token" element={<Token />} />
       <Route path="/faqs" element={<Faqs />} />
      </Routes>
     <Footer />
     </Router>
    </div>
  );
}

export default App;
