import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import TrustedClients from './components/TrustedClients';
import Footer from './components/Footer';
import Historique from './components/Historique';
import ContactPage from './components/ContactPage';

function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Services />
      <TrustedClients />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />
        <main className="pt-[72px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historique" element={<Historique />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;