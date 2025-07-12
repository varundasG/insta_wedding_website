import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Instagram, Phone } from 'lucide-react';

// Import images locally (for Vite compatibility)
import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpeg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: img2,
      title: 'Capturing Love Stories',
      subtitle: 'Your perfect wedding moments, beautifully preserved'
    },
    {
      image: img3,
      title: 'Cinematic Excellence',
      subtitle: 'Professional wedding videography that tells your story'
    },
    {
      image: img1,
      title: 'Pre-Wedding Magic',
      subtitle: 'Romantic pre-wedding shoots in stunning locations'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleBookAppointment = () => {
    window.open('https://www.instagram.com/insta_wedding.co/', '_blank');
  };

  const handleCallNow = () => {
    window.open('tel:902011770', '_self');
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4 leading-tight">
            Insta Wedding Co.
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={handleBookAppointment}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition flex items-center space-x-2"
            >
              <Instagram className="h-5 w-5" />
              <span>Book Appointment</span>
            </motion.button>
            <motion.button
              onClick={handleCallNow}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/20 text-white rounded-full font-medium hover:bg-white/30 backdrop-blur-sm transition flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Location Badge */}
      <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm z-10">
        <span className="font-medium">Palakkad, Kollengode</span>
      </div>
    </div>
  );
};

export default Home;
