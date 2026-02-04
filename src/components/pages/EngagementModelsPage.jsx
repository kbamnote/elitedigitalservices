import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, DollarSign, Calendar, TrendingUp, Zap, Handshake, Target } from 'lucide-react';

const EngagementModelsPage = () => {
  const engagementModels = [
    {
      icon: Clock,
      title: "Time & Material",
      description: "Flexible engagement based on actual time and resources consumed",
      features: [
        "Pay for actual hours worked",
        "Flexible scope changes",
        "Regular progress updates",
        "Transparent billing"
      ],
      bestFor: "Projects with evolving requirements"
    },
    {
      icon: DollarSign,
      title: "Fixed Price",
      description: "Predetermined cost for well-defined project scope",
      features: [
        "Fixed project cost",
        "Clear deliverables",
        "Defined timeline",
        "Budget certainty"
      ],
      bestFor: "Well-defined projects with clear requirements"
    },
    {
      icon: Calendar,
      title: "Dedicated Team",
      description: "Exclusive team assigned to your project full-time",
      features: [
        "Dedicated resources",
        "Direct communication",
        "Full project control",
        "Scalable team size"
      ],
      bestFor: "Long-term projects requiring consistent team"
    },
    {
      icon: Users,
      title: "Staff Augmentation",
      description: "Add specialized experts to your existing team",
      features: [
        "Skilled professionals",
        "Quick onboarding",
        "Seamless integration",
        "Flexible duration"
      ],
      bestFor: "Short-term skill gaps or expertise needs"
    }
  ];

  const benefits = [
    "Cost-Effective Solutions",
    "Scalable Resources",
    "Expert Team Access",
    "Risk Mitigation",
    "Quality Assurance",
    "Transparent Communication"
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
              Engagement Models
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Flexible partnership models designed to match your project needs, budget, and timeline requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Models Section */}
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
              Our Engagement Models
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the partnership model that best fits your project requirements and business objectives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {engagementModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <model.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {model.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {model.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {model.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-sm text-indigo-600 font-medium">
                    Best for: {model.bestFor}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Partnership Benefits
              </h2>
              <p className="text-gray-600 mb-8">
                Our engagement models provide flexibility, transparency, and value that traditional outsourcing cannot match.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Zap className="text-blue-500" size={16} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
            >
              <div className="text-center">
                <Handshake className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Trusted Partnership
                </h3>
                <p className="text-gray-600 mb-6">
                  Long-term relationships built on trust, transparency, and mutual success.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Client Retention</span>
                    <span className="font-bold text-blue-600">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '94%'}}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Our Engagement Process
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Simple, transparent process to establish the right partnership for your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-gray-300 text-sm">
                Understand your requirements and project scope
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Proposal</h3>
              <p className="text-gray-300 text-sm">
                Present tailored engagement model and pricing
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Agreement</h3>
              <p className="text-gray-300 text-sm">
                Formalize partnership with clear terms
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Execution</h3>
              <p className="text-gray-300 text-sm">
                Begin project with dedicated team and resources
              </p>
            </motion.div>
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
              Ready to Find Your Perfect Engagement Model?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's discuss which partnership approach works best for your project and business goals.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default EngagementModelsPage;