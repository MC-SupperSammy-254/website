import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Videos from "./pages/Videos";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import FAQs from "./pages/FAQs";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        < Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
