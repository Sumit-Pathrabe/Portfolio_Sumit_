import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing efficient and maintainable ML pipelines"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Data Visualization",
      description: "Creating insightful and compelling visualizations"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimized models for speed and accuracy"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Problem-Solving",
      description: "Solving complex problems with data"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-on-scroll">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto animate-on-scroll"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-on-scroll">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Passionate Developer & Designer
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Various Project bulit around the field of Data science and enhanacing their workflow
                using Machine learning that's a part of me.Ready for various projects and jobs related
                to data science and Ml Engineering.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                I believe in the power of clean, semantic code and thoughtful design. Whether 
                it's building a complex DS Project or designing an intuitive user interface, 
                I bring attention to detail and a user-first mindset to every project.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Intermidiate level Data Interpreter
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Data Explorer
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Ml Engineer
                </span>
              </div>
            </div>

            <div className="animate-on-scroll animation-delay-300">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Developer workspace" 
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;