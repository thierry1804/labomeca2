import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import s11 from '../assets/slides/s1.1.jpg';
import s12 from '../assets/slides/s1.2.jpg';
import s21 from '../assets/slides/s2.1.jpg';
import s22 from '../assets/slides/s2.2.jpg';
import s31 from '../assets/slides/s3.1.jpg';
import s32 from '../assets/slides/s3.2.jpg';
import s41 from '../assets/slides/s4.1.jpg';
import s42 from '../assets/slides/s4.2.jpg';
import s51 from '../assets/slides/s5.1.jpg';
import s52 from '../assets/slides/s5.2.jpg';
import heroImage1 from '../assets/groupe-vente.jpg';
import heroImage4 from '../assets/travaux.jpg';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css';

const slides = [
  
  {
    image1: heroImage1,
    image2: heroImage4,
    alt: 'Heavy construction equipment and CNC machining',
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
    image1: s11,
    image2: s12,
    alt: 'Travaux de soudure et de chaudronnerie de grande envergure',
    title: (
      <>
        <span className="text-2xl">Travaux de</span>
        <br />
        <span className="text-[#F67122]">SOUDURE ET CHAUDRONNERIE</span>
        <br />
        <span>de grande envergure</span>
      </>
    ),
    description: (
      <>
        <br />
        <br />
      </>
    ),
  },
  {
    image1: s11,
    image2: s12,
    alt: 'Travaux de soudure et de chaudronnerie de grande envergure',
    title: (
      <>
        <span className="text-2xl">Travaux de</span>
        <br />
        <span className="text-[#F67122]">SOUDURE ET CHAUDRONNERIE</span>
        <br />
        <span>de grande envergure</span>
      </>
    ),
    description: (
      <>
        <br />
        <br />
      </>
    ),
  },
  {
    image1: s21,
    image2: s22,
    alt: 'Vente de groupes et accessoires',
    title: (
      <>
        <span className="text-2xl">Vente de</span>
        <br />
        <span className="text-[#F67122]">GROUPES ELECTROGENES & ACCESSOIRES</span>
        <br />
        <span>de qualité européenne</span>
      </>
    ),
    description: (
      <>
        <br />
        <br />
      </>
    ),
  },
  {
    image1: s31,
    image2: s32,
    alt: 'Energie renouvelable (photovoltaïque, etc.)',
    title: (
      <>
        <span className="text-2xl">Mise en place de systèmes d'</span>
        <br />
        <span className="text-[#F67122]">ENERGIE RENOUVELABLE</span>
        <br />
        <span>comme les photovoltaïques</span>
      </>
    ),
    description: (
      <>
        <br />
        <br />
      </>
    ),
  },
  {
    image1: s41,
    image2: s42,
    alt: 'Flexibles hydrauliques et embouts',
    title: (
      <>
        <span className="text-2xl">Confection de</span>
        <br />
        <span className="text-[#F67122]">FLEXIBLES HYDRAULIQUES</span>
        <br />
        <span>et embouts</span>
      </>
    ),
    description: (
      <>
        <br />
        <br />
      </>
    ),
  },
  {
    image1: s51,
    image2: s52,
    alt: 'Travaux de fabrication mécanique: tournage, fraisage, etc.',
    title: (
      <>
        <span className="text-2xl">Travaux de</span>
        <br />
        <span className="text-[#F67122]">FABRICATION MÉCANIQUE</span>
        <br />
        <span>Tournage, fraisage, etc.</span>
      </>
    ),
    description: (
      <>
        <br />
        <br />
      </>
    ),
  },
];

const Hero = ({ ctaRef }: { ctaRef?: React.Ref<HTMLButtonElement> }) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: 'absolute',
          bottom: '3rem',
          right: '4rem',
          width: 'auto',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          zIndex: 20,
        }}
      >
        <button
          onClick={handlePrev}
          className="p-2 bg-black/50 rounded-full hover:bg-black/80 transition"
        >
          <ChevronLeft size={28} />
        </button>
        <ul style={{ margin: '0 1rem', padding: 0, display: 'flex', alignItems: 'center' }}>{dots}</ul>
        <button
          onClick={handleNext}
          className="p-2 bg-black/50 rounded-full hover:bg-black/80 transition"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-3 h-3 rounded-full bg-white/30 custom-dot"></div>
    ),
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative min-h-screen">
            {/* Background Images with diagonal split */}
            <div className="absolute inset-0">
              {/* Container for images */}
              <div className="absolute inset-0 opacity-70">
                {/* Left part of the background */}
                <div
                  className="absolute inset-0"
                  style={{ clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0% 100%)' }}
                >
                  <img
                    src={slide.image1}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                {/* Right part of the background */}
                <div
                  className="absolute inset-0"
                  style={{ clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)' }}
                >
                  <img
                    src={slide.image2}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
              <div className="max-w-3xl min-h-[350px] flex flex-col justify-center">
                <h1
                  className="text-5xl md:text-7xl font-bold leading-tight mb-8"
                  style={{ textShadow: '14px 13px 21px rgba(0, 0, 0)' }}
                >
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
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Controls are now handled by appendDots */}

      {/* Scroll indicator */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;