import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Header from './components/header';
import Quote from './components/quote';
import Home from './components/home';

const App = () => (
  <HashRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </HashRouter>
);

export default App;
