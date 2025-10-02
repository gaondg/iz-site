import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Tools from './pages/Tools/Tools';
import Company from './pages/Company/Company';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/ferramentas" element={<Tools />} />
          <Route path="/empresa" element={<Company />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
