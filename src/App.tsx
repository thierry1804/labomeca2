import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import TrustedClients from './components/TrustedClients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Products />
      <Services />
      <TrustedClients />
      <Footer />
    </div>
  );
}

export default App;