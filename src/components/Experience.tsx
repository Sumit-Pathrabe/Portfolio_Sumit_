import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Analytics Corp",
      location: "San Francisco, CA",
      duration: "2023 - Present",
      description: [
        "Develop machine learning models for customer segmentation and churn prediction",
        "Analyze large datasets using Python, SQL, and statistical methods to derive insights",
        "Create interactive dashboards and visualizations using Tableau and Power BI",
        "Collaborate with cross-functional teams to implement data-driven solutions"
      ],
      current: true
    },
    {
      title: "Research Assistant",
      company: "University Data Lab",
      location: "Boston, MA",
      duration: "2022 - 2023",
      description: [
        "Conducted statistical analysis on healthcare datasets to identify treatment patterns",
        "Implemented machine learning algorithms for predictive modeling in medical research",
        "Published findings in peer-reviewed journals and presented at academic conferences",
        "Mentored undergraduate students in data analysis and statistical methods"
      ],
      current: false
    },
    {
      title: "Data Analyst Intern",
      company: "FinTech Solutions",
      location: "Chicago, IL",
      duration: "2021 - 2022",
      description: [
        "Analyzed financial data to identify market trends and investment opportunities",
        "Built automated reporting systems using Python and SQL for daily operations",
        "Created data pipelines for real-time processing of trading data",
        "Developed risk assessment models using statistical analysis and machine learning"
      ],
      current: false
    },
    {
      title: "Statistics Tutor",
      company: "University Learning Center",
      location: "Remote",
      duration: "2020 - 2021",
      description: [
        "Tutored undergraduate students in statistics, probability, and data analysis",
        "Developed educational materials and practice problems for statistical concepts",
        "Assisted students with statistical software including R, Python, and SPSS",
        "Improved student understanding of complex statistical methods and hypothesis testing"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto animate-on-scroll"></div>
            <p className="text-xl text-gray-600 mt-6 animate-on-scroll animation-delay-300">
              My journey in web development
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 animate-on-scroll ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Node */}
                <div className={`absolute left-4 md:left-1/2 transform ${
                  index % 2 === 0 ? 'md:-translate-x-6' : 'md:-translate-x-6'
                } w-4 h-4 ${
                  exp.current ? 'bg-green-500' : 'bg-blue-600'
                } rounded-full border-4 border-white shadow-lg z-10`}>
                  {exp.current && (
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-600 font-semibold mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 text-sm mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-gray-600 flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;