import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Camera, Video, MapPin } from 'lucide-react';
import img3 from '../images/img3.jpeg';

const About = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-rose-500" />,
      title: 'Wedding Photography',
      description: 'Capturing the magic of your special day with artistic vision'
    },
    {
      icon: <Camera className="h-8 w-8 text-rose-500" />,
      title: 'Pre-Wedding Shoots',
      description: 'Romantic sessions that tell your unique love story'
    },
    {
      icon: <Video className="h-8 w-8 text-rose-500" />,
      title: 'Cinematic Videos',
      description: 'Professional videography for weddings and advertisements'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-cream-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            About Insta Wedding Co.
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <MapPin className="h-5 w-5 text-rose-500" />
            <span className="text-gray-600">Palakkad, Kollengode</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={img3}
              alt="Wedding photography setup"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-500 rounded-full flex items-center justify-center">
              <Camera className="h-16 w-16 text-white" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif text-gray-800 mb-4">
              Passionate About Your Story
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Insta Wedding Co., we believe every love story deserves to be told with passion,
              creativity, and cinematic excellence. Based in the heart of Palakkad, Kollengode,
              we specialize in capturing the most precious moments of your life through our lens.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team combines years of experience with a fresh, artistic approach to wedding
              photography and videography. From intimate pre-wedding shoots to grand celebration
              ceremonies, we create timeless memories that you'll treasure forever.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We also extend our creative expertise to commercial video advertisements, helping
              businesses tell their stories with the same attention to detail and cinematic
              quality that defines our wedding work.
            </p>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
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
            Ready to Create Magic Together?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss your vision and create something beautiful
          </p>
          <button
            onClick={() => window.open('tel:902011770', '_self')}
            className="px-8 py-3 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition-colors"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
