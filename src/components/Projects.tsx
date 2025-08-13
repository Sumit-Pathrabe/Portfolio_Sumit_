import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Machine learning model to predict customer churn using advanced algorithms. Achieved 94% accuracy with feature engineering and hyperparameter tuning.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Sales Forecasting Dashboard",
      description: "Interactive dashboard for sales prediction using time series analysis and machine learning. Provides actionable insights for business planning.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "Streamlit", "Prophet", "Plotly"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Sentiment Analysis Tool",
      description: "NLP-powered sentiment analysis tool for social media monitoring. Processes thousands of posts to gauge public opinion and brand sentiment.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "NLTK", "TensorFlow", "Flask"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Recommendation System",
      description: "Collaborative filtering recommendation system for e-commerce platform. Improved user engagement by 35% through personalized product suggestions.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "Surprise", "Pandas", "NumPy"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const featuredProjects = projects.filter(project => project.featured);
  const currentProj = projects[currentProject];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto animate-on-scroll"></div>
            <p className="text-xl text-gray-600 mt-6 animate-on-scroll animation-delay-300">
              Some of my recent work
            </p>
          </div>

          {/* Featured Project Slider */}
          <div className="relative mb-16 animate-on-scroll animation-delay-500">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative group">
                  <img 
                    src={currentProj.image} 
                    alt={currentProj.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{currentProj.title}</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {currentProj.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentProj.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={currentProj.demo}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={currentProj.github}
                      className="inline-flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button 
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Project Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative group overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex space-x-2">
                        <a 
                          href={project.demo}
                          className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-white transition-colors duration-300"
                        >
                          <ExternalLink size={16} />
                        </a>
                        <a 
                          href={project.github}
                          className="p-2 bg-white/90 text-gray-800 rounded-full hover:bg-white transition-colors duration-300"
                        >
                          <Github size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;