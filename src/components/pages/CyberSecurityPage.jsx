import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle, Key, Server, Users, Zap } from 'lucide-react';

const CyberSecurityPage = () => {
  const securityServices = [
    {
      icon: Shield,
      title: "Threat Protection",
      description: "Advanced security solutions to protect against cyber threats and attacks"
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "End-to-end encryption for sensitive data and communications"
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous surveillance and real-time threat detection"
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid response protocols for security breaches and incidents"
    }
  ];

  const securityFeatures = [
    "Firewall Protection",
    "Intrusion Detection",
    "Vulnerability Assessment",
    "Security Audits",
    "Compliance Management",
    "Employee Training",
    "Backup Security",
    "Network Security"
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
              Cyber Security Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Protect your business from evolving cyber threats with our comprehensive security services and proactive defense strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Comprehensive Security Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multi-layered security approach to protect your digital assets and maintain business continuity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                Essential Security Features
              </h2>
              <p className="text-gray-600 mb-8">
                Our comprehensive security framework covers all critical aspects of cyber protection.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
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
                <Shield className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Zero Trust Security
                </h3>
                <p className="text-gray-600 mb-6">
                  Advanced security model that verifies every user and device before granting access.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Threats Blocked</span>
                    <span className="font-bold text-blue-600">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '99.9%'}}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Threats Section */}
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
              Protection Against Modern Threats
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Stay ahead of evolving cyber threats with our proactive security measures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-gray-800 rounded-xl"
            >
              <Key className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Ransomware</h3>
              <p className="text-gray-300">
                Advanced protection against ransomware attacks with automated backup and recovery systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-gray-800 rounded-xl"
            >
              <Server className="text-green-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Data Breaches</h3>
              <p className="text-gray-300">
                Multi-layered security protocols to prevent unauthorized access and data exfiltration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-gray-800 rounded-xl"
            >
              <Users className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Social Engineering</h3>
              <p className="text-gray-300">
                Employee training and awareness programs to combat phishing and social engineering attacks.
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
              Secure Your Digital Future Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't wait for a security incident to protect your business. Get comprehensive cyber security coverage now.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Security Assessment
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CyberSecurityPage;