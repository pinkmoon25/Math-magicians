import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Header from './components/header';
import Quote from './components/quote';
import Home from './components/home';
import Footer from './components/footer';

const App = () => (
  <HashRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
    <Footer />
  </HashRouter>
);

export default App;
