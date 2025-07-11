import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram, MapPin, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-rose-500" />,
      title: 'Phone',
      value: '902011770',
      action: () => window.open('tel:902011770', '_self')
    },
    {
      icon: <Instagram className="h-6 w-6 text-rose-500" />,
      title: 'Instagram',
      value: '@insta_wedding.co',
      action: () => window.open('https://www.instagram.com/insta_wedding.co/', '_blank')
    },
    {
      icon: <MapPin className="h-6 w-6 text-rose-500" />,
      title: 'Location',
      value: 'Palakkad, Kollengode',
      action: () => window.open('https://maps.google.com/?q=Kollengode,Palakkad', '_blank')
    },
    {
      icon: <Clock className="h-6 w-6 text-rose-500" />,
      title: 'Working Hours',
      value: '9:00 AM - 8:00 PM',
      action: null
    }
  ];

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
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            Ready to capture your special moments? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-serif text-gray-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow ${
                      item.action ? 'cursor-pointer' : ''
                    }`}
                    onClick={item.action || undefined}
                  >
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.title}</p>
                      <p className="text-lg font-medium text-gray-800">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-gray-800">Quick Actions</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.open('tel:902011770', '_self')}
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </button>
                <button
                  onClick={() => window.open('https://www.instagram.com/insta_wedding.co/', '_blank')}
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Follow on Instagram</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Map and Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Location Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-4">Our Location</h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-rose-500 mx-auto mb-2" />
                    <p className="text-gray-600">Palakkad, Kollengode</p>
                    <button
                      onClick={() => window.open('https://maps.google.com/?q=Kollengode,Palakkad', '_blank')}
                      className="mt-2 text-rose-500 hover:text-rose-600 text-sm font-medium"
                    >
                      View on Google Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Image */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/insta_wedding_website/images/img2.jpeg"
                alt="Wedding photography studio"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-2">
                  Professional Studio
                </h3>
                <p className="text-gray-600">
                  Equipped with state-of-the-art equipment and a passion for capturing 
                  life's most precious moments.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-serif text-gray-800 mb-4">
            Ready to Book Your Session?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your vision and let us bring it to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('tel:902011770', '_self')}
              className="px-8 py-3 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call 902011770</span>
            </button>
            <button
              onClick={() => window.open('https://www.instagram.com/insta_wedding.co/', '_blank')}
              className="px-8 py-3 bg-white text-rose-500 border-2 border-rose-500 rounded-full font-medium hover:bg-rose-50 transition-colors flex items-center justify-center space-x-2"
            >
              <Instagram className="h-5 w-5" />
              <span>Message on Instagram</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;