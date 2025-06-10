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
      <main className="pt-[72px]">
        <Hero />
        <Products />
        <Services />
        <TrustedClients />
        <Footer />
      </main>
    </div>
  );
}

export default App;