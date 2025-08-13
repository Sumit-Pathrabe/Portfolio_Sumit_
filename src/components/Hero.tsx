import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block animate-slideInLeft">Hello, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-slideInRight animation-delay-500">
              John Doe
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fadeInUp animation-delay-1000">
            Aspiring Data Scientist & Machine Learning Engineer
          </p>
          
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto animate-fadeInUp animation-delay-1500">
            I analyze complex data to uncover insights and build intelligent machine learning 
            models that solve real-world problems and drive data-driven decisions.
          </p>

          <div className="flex justify-center space-x-6 mb-12 animate-fadeInUp animation-delay-2000">
            <a 
              href="#" 
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a 
              href="#" 
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a 
              href="#" 
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>

          <div className="animate-fadeInUp animation-delay-2500">
            <button 
              onClick={scrollToAbout}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>Get to know me</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;