import React from 'react';
import Header from '../common/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from "../services/Services"
import Blog from "../blog/Blog"
import Pricing from "../Pricing/Pricing";
import Contact from "../contact/Contact";
import Footer from '../common/footer/Footer';
import Home from '../Home/Home';
import About from '../about/About';






const Pages = () => {
  return (
    <>
      <Header/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/services" element={<Services />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/pricing" element={<Pricing />} />
      <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default Pages;