import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import TrustedClients from './components/TrustedClients';
import Footer from './components/Footer';
import Historique from './components/Historique';
import ContactPage from './components/ContactPage';

function Home() {
  // Référence pour le bouton principal dans Hero
  const heroCtaRef = useRef<HTMLButtonElement | null>(null);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!heroCtaRef.current) return;
      const rect = heroCtaRef.current.getBoundingClientRect();
      // Si le bouton n'est pas visible dans le viewport, on affiche le bouton flottant
      setShowFloatingCta(rect.bottom < 0 || rect.top > window.innerHeight);
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* On passe la ref au Hero pour le bouton principal */}
      <Hero ctaRef={heroCtaRef} />
      <Products />
      <Services />
      <TrustedClients />
      {/* Bouton flottant */}
      {showFloatingCta && (
        <Link to="/contact">
          <button
            className="fixed bottom-8 right-8 z-50 bg-[#F67122] hover:bg-[#F67122]/90 text-white px-6 py-4 rounded-full shadow-lg font-bold text-lg transition-all duration-300 animate-bounce"
            style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.25)' }}
          >
            Obtenir un devis gratuit
          </button>
        </Link>
      )}
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