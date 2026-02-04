import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileLock, Key, Cloud, RefreshCw, ShieldCheck, HardDrive, Lock } from 'lucide-react';

const DataSecurityPage = () => {
  const dataProtectionServices = [
    {
      icon: Database,
      title: "Data Encryption",
      description: "Advanced encryption for data at rest and in transit"
    },
    {
      icon: FileLock,
      title: "Access Control",
      description: "Role-based access management and authentication"
    },
    {
      icon: Key,
      title: "Key Management",
      description: "Secure key generation, storage, and rotation"
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Secure cloud storage and data migration"
    }
  ];

  const securityMeasures = [
    "End-to-End Encryption",
    "Multi-Factor Authentication",
    "Regular Security Audits",
    "Compliance Frameworks",
    "Data Backup & Recovery",
    "Incident Response Plans",
    "Privacy Protection",
    "Regulatory Compliance"
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
              Data Security Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Protect your sensitive data with enterprise-grade security measures and compliance frameworks.
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
              Data Protection Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive data security solutions to safeguard your organization's most valuable assets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataProtectionServices.map((service, index) => (
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

      {/* Measures Section */}
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
                Comprehensive Security Measures
              </h2>
              <p className="text-gray-600 mb-8">
                Our multi-layered approach ensures your data remains secure across all touchpoints and environments.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {securityMeasures.map((measure, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <ShieldCheck className="text-blue-500" size={16} />
                    <span className="text-gray-700">{measure}</span>
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
                <HardDrive className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  256-bit Encryption
                </h3>
                <p className="text-gray-600 mb-6">
                  Military-grade encryption standards to protect your most sensitive data.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Security Rating</span>
                    <span className="font-bold text-blue-600">A+</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
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
              Compliance & Standards
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meeting industry standards and regulatory requirements for data protection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6 bg-gray-800 rounded-xl"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">GDPR</div>
              <p className="text-gray-300 text-sm">
                General Data Protection Regulation compliance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 bg-gray-800 rounded-xl"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">HIPAA</div>
              <p className="text-gray-300 text-sm">
                Health Insurance Portability and Accountability Act
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6 bg-gray-800 rounded-xl"
            >
              <div className="text-3xl font-bold text-yellow-400 mb-2">SOC 2</div>
              <p className="text-gray-300 text-sm">
                Service Organization Control Type 2 certification
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 bg-gray-800 rounded-xl"
            >
              <div className="text-3xl font-bold text-red-400 mb-2">ISO 27001</div>
              <p className="text-gray-300 text-sm">
                International information security management
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recovery Section */}
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
                Disaster Recovery & Backup
              </h2>
              <p className="text-gray-600 mb-8">
                Automated backup systems and rapid recovery protocols to ensure business continuity.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <RefreshCw className="text-blue-500" size={20} />
                  <span>Automated daily backups</span>
                </li>
                <li className="flex items-center gap-3">
                  <Lock className="text-blue-500" size={20} />
                  <span>Encrypted backup storage</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="text-blue-500" size={20} />
                  <span>RTO under 4 hours</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
            >
              <div className="text-center">
                <Database className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  99.99% Data Recovery
                </h3>
                <p className="text-gray-600">
                  Industry-leading recovery rates with minimal data loss protection.
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
              Protect Your Data Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Ensure your sensitive information stays secure with our comprehensive data security solutions.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Security Assessment
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default DataSecurityPage;