import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Target, Clock, BarChart3 } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Transformation",
      client: "RetailTech Solutions",
      industry: "E-Commerce",
      challenge: "Legacy platform unable to handle growing traffic and conversion demands",
      solution: "Modern microservices architecture with cloud-native deployment",
      results: [
        "400% increase in page load speed",
        "65% improvement in conversion rate",
        "99.9% uptime achieved",
        "50% reduction in infrastructure costs"
      ],
      metrics: {
        before: { traffic: "50K/month", conversion: "1.2%", uptime: "95%" },
        after: { traffic: "200K/month", conversion: "3.1%", uptime: "99.9%" }
      }
    },
    {
      id: 2,
      title: "Healthcare Data Management System",
      client: "MediCore Hospital Network",
      industry: "Healthcare",
      challenge: "Compliance requirements and fragmented patient data systems",
      solution: "HIPAA-compliant cloud solution with integrated data management",
      results: [
        "100% HIPAA compliance achieved",
        "75% reduction in data processing time",
        "Improved patient care coordination",
        "Enhanced data security protocols"
      ],
      metrics: {
        before: { processing: "48 hours", compliance: "85%", security: "Medium" },
        after: { processing: "12 hours", compliance: "100%", security: "High" }
      }
    },
    {
      id: 3,
      title: "Financial Services Mobile App",
      client: "FinSecure Bank",
      industry: "Financial Services",
      challenge: "Need for secure mobile banking solution with real-time features",
      solution: "Banking-grade security mobile application with real-time processing",
      results: [
        "200K+ app downloads in first quarter",
        "99.99% transaction success rate",
        "Bank-level security certification",
        "40% increase in mobile transactions"
      ],
      metrics: {
        before: { mobile: "5%", transactions: "15K/day", security: "Standard" },
        after: { mobile: "35%", transactions: "45K/day", security: "Banking-grade" }
      }
    }
  ];

  const industries = [
    "E-Commerce & Retail",
    "Healthcare & Medical",
    "Financial Services",
    "Manufacturing",
    "Education",
    "Real Estate",
    "Transportation",
    "Media & Entertainment"
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real-world examples of how we've helped businesses transform their digital presence and achieve remarkable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored solutions for unique challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-gray-700 font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore how our solutions have driven real business impact across various industries.
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 p-8 bg-gradient-to-br from-blue-50 to-blue-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="text-blue-600" size={20} />
                      <span className="text-blue-700 font-medium">Case Study #{study.id}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2">
                        <Users className="text-blue-600" size={16} />
                        <span className="text-gray-600">{study.client}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="text-blue-600" size={16} />
                        <span className="text-gray-600">{study.industry}</span>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        {study.results.slice(0, 3).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium text-gray-900 mb-2">Before Implementation</h5>
                          {Object.entries(study.metrics.before).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-sm py-1">
                              <span className="text-gray-600 capitalize">{key}:</span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h5 className="font-medium text-blue-900 mb-2">After Implementation</h5>
                          {Object.entries(study.metrics.after).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-sm py-1">
                              <span className="text-blue-700 capitalize">{key}:</span>
                              <span className="font-semibold text-blue-900">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Join our list of successful clients who have transformed their business with our solutions.
            </p>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;