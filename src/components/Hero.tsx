import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage1 from '../assets/groupe-vente.jpg';
import heroImage2 from '../assets/groupe-maintenance.jpg';
import heroImage3 from '../assets/hero-bg.jpg';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: heroImage1,
    alt: 'Heavy construction equipment',
    title: (
      <>
        <span className="text-2xl">DÉCOUVREZ NOS </span>
        <br />
        <span className="text-[#F67122]">NOS SERVICES</span>
        <br />
        <span>& NOS ÉQUIPEMENTS INDUSTRIELS</span>
      </>
    ),
    description: (
      <>
        <strong className="text-[#F67122]">Services industriels complets pour vos projets les plus exigeants.</strong><br />
        De l'étude à la maintenance, nous vous accompagnons à chaque étape.
      </>
    ),
  },
  {
    image: heroImage2, // Remplace par une autre image si dispo
    alt: 'Industrial maintenance',
    title: (
      <>
        <span className="text-2xl">MAINTENANCE & </span>
        <br />
        <span className="text-[#F67122]">SUPPORT <br />TECHNIQUE</span>
        <br />
        <span>POUR VOS MACHINES</span>
      </>
    ),
    description: (
      <>
        <strong className="text-[#F67122]">Assistance rapide et efficace sur site.</strong><br />
        Nos experts interviennent partout à Madagascar.
      </>
    ),
  },
  {
    image: heroImage3, // Remplace par une autre image si dispo
    alt: 'Engineering study',
    title: (
      <>
        <span className="text-2xl">ÉTUDES & </span>
        <br />
        <span className="text-[#F67122]">CONCEPTION</span>
        <br />
        <span>DE PROJETS INDUSTRIELS</span>
      </>
    ),
    description: (
      <>
        <strong className="text-[#F67122]">Des solutions sur-mesure pour chaque client.</strong><br />
        De la conception à la réalisation, un accompagnement complet.
      </>
    ),
  },
];

const Hero = ({ ctaRef }: { ctaRef?: React.Ref<HTMLButtonElement> }) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevImage, setPrevImage] = useState(slides[0].image);
  const total = slides.length;
  const transitionDuration = 400;

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  // Transition helpers
  const handlePrev = () => {
    setIsTransitioning(true);
    setPrevImage(slides[current].image);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
      setIsTransitioning(false);
    }, transitionDuration);
  };
  const handleNext = () => {
    setIsTransitioning(true);
    setPrevImage(slides[current].image);
    setTimeout(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, transitionDuration);
  };

  const slide = slides[current];

  // Met à jour prevImage quand le slide courant change (pour autoplay)
  useEffect(() => {
    if (!isTransitioning) setPrevImage(slide.image);
    // eslint-disable-next-line
  }, [current]);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Images with fade transition */}
      <div className="absolute inset-0">
        {/* Previous image (fade out) */}
        <img
          src={prevImage}
          alt=""
          className={`w-full h-full object-cover opacity-60 scale-x-[-1] absolute inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-60' : 'opacity-0 pointer-events-none'}`}
          style={{ zIndex: 1 }}
        />
        {/* Current image (fade in) */}
        <img
          src={slide.image}
          alt={slide.alt}
          className={`w-full h-full object-cover opacity-60 scale-x-[-1] absolute inset-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-60'}`}
          style={{ zIndex: 2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" style={{ zIndex: 3 }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
        <div className="max-w-3xl min-h-[350px] flex flex-col justify-center transition-opacity duration-500" style={{ opacity: isTransitioning ? 0 : 1 }}>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            {slide.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            {slide.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group bg-[#F67122] hover:bg-[#F67122]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105">
              <ArrowRight className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
              Voir nos services
            </button>
            <Link to="/contact">
              <button
                ref={ctaRef}
                className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Obtenir un devis gratuit
              </button>
            </Link>
          </div>
          {/* Slider Controls */}
          <div className="flex items-center gap-4 mt-8">
            <button onClick={handlePrev} className="p-2 bg-black/50 rounded-full hover:bg-black/80 transition"><ChevronLeft size={28} /></button>
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full ${idx === current ? 'bg-[#F67122]' : 'bg-white/30'} block`}
                ></span>
              ))}
            </div>
            <button onClick={handleNext} className="p-2 bg-black/50 rounded-full hover:bg-black/80 transition"><ChevronRight size={28} /></button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;