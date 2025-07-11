import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = ['All', 'Pre-Wedding', 'Candid Moments', 'Traditional', 'Teasers'];

  const galleryImages = [
    {
      src: '/insta_wedding_website/images/img1.jpg',
      category: 'Traditional',
      title: 'Traditional Wedding Ceremony'
    },
    {
      src: '/insta_wedding_website/images/img2.jpg',
      category: 'Pre-Wedding',
      title: 'Pre-Wedding Shoot'
    },
    {
      src: '/insta_wedding_website/images/img3.jpg',
      category: 'Candid Moments',
      title: 'Candid Wedding Moments'
    },
    {
      src: '/insta_wedding_website/images/img4.jpg',
      category: 'Traditional',
      title: 'Wedding Rituals'
    },
    {
      src: '/insta_wedding_website/images/img5.jpg',
      category: 'Teasers',
      title: 'Wedding Teaser'
    }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Auto-slide for featured carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-cream-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Photo Gallery
          </h1>
          <p className="text-lg text-gray-600">
            Capturing life's most precious moments with artistic vision
          </p>
        </motion.div>

        {/* Featured Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-16 shadow-2xl"
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-serif mb-2">{image.title}</h3>
                <span className="px-3 py-1 bg-rose-500 rounded-full text-sm">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-rose-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-500'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${selectedCategory}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-lg mb-1">{image.title}</h3>
                  <span className="text-sm bg-rose-500 px-2 py-1 rounded">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-serif text-gray-800 mb-4">
            Love What You See?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's create beautiful memories together
          </p>
          <button
            onClick={() => window.open('https://www.instagram.com/insta_wedding.co/', '_blank')}
            className="px-8 py-3 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition-colors"
          >
            Book Your Session
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;