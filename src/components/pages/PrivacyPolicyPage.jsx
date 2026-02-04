import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail, User } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const lastUpdated = "January 15, 2024";

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 mb-4">
              Last Updated: {lastUpdated}
            </p>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <div className="space-y-8">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Shield className="text-blue-600" size={28} />
                    1. Information We Collect
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We collect information that you provide directly to us, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Personal Information:</strong> Name, email address, phone number, company information</li>
                      <li><strong>Business Information:</strong> Project requirements, business needs, communication preferences</li>
                      <li><strong>Technical Information:</strong> IP address, browser type, device information, usage data</li>
                      <li><strong>Communication Data:</strong> Messages, feedback, support requests</li>
                    </ul>
                  </div>
                </section>

                {/* How We Use Information */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Eye className="text-blue-600" size={28} />
                    2. How We Use Your Information
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>We use the collected information for:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Providing and improving our services</li>
                      <li>Communicating with you about your projects</li>
                      <li>Processing payments and managing accounts</li>
                      <li>Sending service-related notifications</li>
                      <li>Conducting market research and analysis</li>
                      <li>Complying with legal obligations</li>
                    </ul>
                  </div>
                </section>

                {/* Data Protection */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Lock className="text-blue-600" size={28} />
                    3. Data Protection Measures
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>We implement robust security measures to protect your information:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Encryption of data in transit and at rest</li>
                      <li>Regular security audits and assessments</li>
                      <li>Access controls and authentication protocols</li>
                      <li>Secure data storage and backup systems</li>
                      <li>Employee training on data protection practices</li>
                    </ul>
                  </div>
                </section>

                {/* Data Sharing */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <User className="text-blue-600" size={28} />
                    4. Data Sharing and Disclosure
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>With your explicit consent</li>
                      <li>With service providers who assist in our operations</li>
                      <li>To comply with legal requirements or court orders</li>
                      <li>To protect our rights, property, or safety</li>
                      <li>In connection with a business transfer or merger</li>
                    </ul>
                  </div>
                </section>

                {/* Cookies and Tracking */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Database className="text-blue-600" size={28} />
                    5. Cookies and Tracking Technologies
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>We use cookies and similar tracking technologies to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Enhance your browsing experience</li>
                      <li>Analyze website usage and performance</li>
                      <li>Remember your preferences</li>
                      <li>Provide personalized content</li>
                    </ul>
                    <p>You can control cookie preferences through your browser settings.</p>
                  </div>
                </section>

                {/* Your Rights */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    6. Your Rights and Choices
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate information</li>
                      <li>Request deletion of your data</li>
                      <li>Object to processing of your information</li>
                      <li>Withdraw consent at any time</li>
                      <li>Data portability requests</li>
                    </ul>
                  </div>
                </section>

                {/* Data Retention */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    7. Data Retention
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We retain your personal information for as long as necessary to provide our services and comply with legal obligations. The retention period varies based on the type of information and purpose for which it was collected.
                  </p>
                </section>

                {/* Children's Privacy */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    8. Children's Privacy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information.
                  </p>
                </section>

                {/* International Transfers */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    9. International Data Transfers
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
                  </p>
                </section>

                {/* Changes to Policy */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    10. Changes to This Policy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                {/* Contact Information */}
                <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Mail className="text-blue-600" size={28} />
                    Contact Us
                  </h2>
                  <div className="space-y-3 text-gray-700">
                    <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
                    <p><strong className="text-gray-900">Email:</strong> privacy@elitedigitalsolutions.com</p>
                    <p><strong className="text-gray-900">Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong className="text-gray-900">Address:</strong> 4517 Washington Ave, Manchester, Kentucky 39495</p>
                    <p className="pt-4 text-sm text-gray-600">
                      We will respond to your inquiries within 30 days.
                    </p>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Privacy Commitment
            </h2>
            <p className="text-gray-600 mb-6">
              We are committed to protecting your privacy and maintaining the security of your personal information.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-sm font-medium text-gray-700">GDPR Compliant</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-sm font-medium text-gray-700">CCPA Ready</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-sm font-medium text-gray-700">ISO 27001 Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;