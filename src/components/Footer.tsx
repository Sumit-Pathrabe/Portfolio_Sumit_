import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-6 h-6" />
          </button>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                John Doe
              </h3>
              <p className="text-gray-400 mb-4">
                Aspiring Data Scientist & Machine Learning Engineer passionate about 
                extracting insights from data and building intelligent solutions.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`} 
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Data Analysis</li>
                <li>Machine Learning</li>
                <li>Statistical Modeling</li>
                <li>Data Visualization</li>
                <li>Predictive Analytics</li>
                <li>Research & Insights</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 John Doe. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;