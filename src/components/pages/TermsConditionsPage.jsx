import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Clock, Users, Mail } from 'lucide-react';

const TermsConditionsPage = () => {
  const lastUpdated = "January 15, 2024";

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-200 mb-4">
              Last Updated: {lastUpdated}
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
                    <FileText className="text-blue-600" size={28} />
                    1. Introduction
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to Elite Digital Solutions. These terms and conditions outline the rules and regulations for the use of Elite Digital Solutions' website and services. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Elite Digital Solutions if you do not agree to all of the terms and conditions stated on this page.
                  </p>
                </section>

                {/* Services */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Shield className="text-blue-600" size={28} />
                    2. Services
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Elite Digital Solutions provides digital services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Web development and design</li>
                    <li>Mobile application development</li>
                    <li>IT consulting and management</li>
                    <li>Cybersecurity services</li>
                    <li>SEO and digital marketing</li>
                    <li>Cloud solutions and migration</li>
                  </ul>
                </section>

                {/* Client Responsibilities */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Users className="text-blue-600" size={28} />
                    3. Client Responsibilities
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Clients agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Provide accurate and complete information</li>
                    <li>Cooperate with our team throughout the project</li>
                    <li>Make timely payments as outlined in the agreement</li>
                    <li>Respect intellectual property rights</li>
                    <li>Provide necessary access and resources for project completion</li>
                  </ul>
                </section>

                {/* Payment Terms */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Clock className="text-blue-600" size={28} />
                    4. Payment Terms
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong className="text-gray-900">Payment Schedule:</strong> Payments are due according to the agreed payment schedule outlined in the project proposal.
                    </p>
                    <p>
                      <strong className="text-gray-900">Late Payments:</strong> Late payments may incur additional fees and could result in project delays.
                    </p>
                    <p>
                      <strong className="text-gray-900">Refunds:</strong> Refund policies vary by service type and are outlined in individual service agreements.
                    </p>
                  </div>
                </section>

                {/* Intellectual Property */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    5. Intellectual Property
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    All intellectual property rights in the services, deliverables, and materials created by Elite Digital Solutions remain the property of Elite Digital Solutions until full payment has been received. Upon full payment, ownership transfers to the client as specified in the agreement.
                  </p>
                </section>

                {/* Confidentiality */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    6. Confidentiality
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Both parties agree to maintain confidentiality of proprietary information shared during the course of the project. This obligation extends beyond the termination of the agreement.
                  </p>
                </section>

                {/* Limitation of Liability */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    7. Limitation of Liability
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Elite Digital Solutions' liability for any claims arising from the services shall be limited to the total amount paid by the client for the specific service in question. We shall not be liable for indirect, incidental, or consequential damages.
                  </p>
                </section>

                {/* Termination */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    8. Termination
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Either party may terminate the agreement with written notice. Upon termination, the client shall pay for all services rendered up to the termination date. Elite Digital Solutions retains rights to any work completed prior to termination.
                  </p>
                </section>

                {/* Changes to Terms */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    9. Changes to Terms
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Elite Digital Solutions reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified terms.
                  </p>
                </section>

                {/* Governing Law */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    10. Governing Law
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    These terms shall be governed by and construed in accordance with the laws of the jurisdiction where Elite Digital Solutions operates, without regard to its conflict of law provisions.
                  </p>
                </section>

                {/* Contact Information */}
                <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Mail className="text-blue-600" size={28} />
                    Contact Information
                  </h2>
                  <div className="space-y-3 text-gray-700">
                    <p><strong className="text-gray-900">Email:</strong> legal@elitedigitalsolutions.com</p>
                    <p><strong className="text-gray-900">Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong className="text-gray-900">Address:</strong> 4517 Washington Ave, Manchester, Kentucky 39495</p>
                    <p className="pt-4 text-sm text-gray-600">
                      If you have any questions about these Terms & Conditions, please contact us using the information above.
                    </p>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Acknowledgment Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-600 mb-6">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm inline-block">
              <p className="text-sm text-gray-500">
                Last Updated: {lastUpdated}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TermsConditionsPage;