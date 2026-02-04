import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Shield, TrendingUp, Clock, Award } from 'lucide-react';

const ItManagementPage = () => {
  const benefits = [
    {
      icon: Users,
      title: "Expert Team Management",
      description: "Dedicated IT professionals with specialized skills and certifications"
    },
    {
      icon: Shield,
      title: "Proactive Security",
      description: "24/7 monitoring and threat detection to protect your infrastructure"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous system optimization for maximum efficiency and uptime"
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description: "Quick issue resolution with SLA-guaranteed response times"
    }
  ];

  const services = [
    "Infrastructure Management",
    "Network Administration",
    "System Monitoring",
    "Performance Optimization",
    "Security Management",
    "Backup & Disaster Recovery",
    "Cloud Infrastructure",
    "Vendor Management"
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IT Management Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive IT management solutions to keep your technology infrastructure running smoothly, securely, and efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our IT Management
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional IT management that reduces costs, improves performance, and ensures business continuity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                Comprehensive IT Management Services
              </h2>
              <p className="text-gray-600 mb-8">
                Our IT management services cover every aspect of your technology infrastructure, ensuring optimal performance and minimal downtime.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl"
            >
              <div className="text-center">
                <Award className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  99.9% Uptime Guarantee
                </h3>
                <p className="text-gray-600">
                  We ensure your systems stay operational with industry-leading reliability standards.
                </p>
              </div>
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
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our expert team manage your technology so you can focus on your core business.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ItManagementPage;