import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Heart, Coffee, Code, Palette, Shield } from 'lucide-react';

const OurTeamPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      experience: "15+ years",
      expertise: ["Cloud Architecture", "DevOps", "Enterprise Solutions"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      experience: "12+ years",
      expertise: ["Full Stack Development", "React", "Node.js", "Python"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      linkedin: "#"
    },
    {
      name: "Emma Rodriguez",
      role: "UX/UI Design Director",
      experience: "10+ years",
      expertise: ["User Experience", "Interface Design", "Design Systems"],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "Cybersecurity Specialist",
      experience: "13+ years",
      expertise: ["Security Architecture", "Penetration Testing", "Compliance"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      linkedin: "#"
    },
    {
      name: "Lisa Thompson",
      role: "Project Manager",
      experience: "11+ years",
      expertise: ["Agile Methodology", "Scrum Master", "Team Leadership"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      linkedin: "#"
    },
    {
      name: "Robert Williams",
      role: "Data Scientist",
      experience: "9+ years",
      expertise: ["Machine Learning", "Data Analytics", "AI Implementation"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "We're driven by a commitment to deliver exceptional results and exceed expectations."
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Always learning, adapting, and staying ahead of industry trends and technologies."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Teamwork and open communication are at the heart of everything we do."
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "Attention to detail and rigorous standards ensure premium deliverables."
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members" },
    { number: "200+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-indigo-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Team
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet the talented professionals who bring your digital vision to life with expertise, passion, and dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our company culture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals with diverse expertise driving innovation and excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute bottom-0 right-1/2 translate-x-16 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {member.experience} experience
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
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
                Our Company Culture
              </h2>
              <p className="text-gray-600 mb-8">
                We foster an environment of innovation, collaboration, and continuous learning where every team member can thrive.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Coffee className="text-orange-500 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Work-Life Balance</h3>
                    <p className="text-gray-600">Flexible schedules and remote work options to support personal well-being.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Code className="text-green-500 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Learning & Development</h3>
                    <p className="text-gray-600">Regular training, conferences, and skill development opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Palette className="text-purple-500 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Creative Freedom</h3>
                    <p className="text-gray-600">Encouraging innovative thinking and creative problem-solving approaches.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="text-red-500 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Inclusive Environment</h3>
                    <p className="text-gray-600">Diverse team with equal opportunities for growth and advancement.</p>
                  </div>
                </div>
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
                <Users className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Team Collaboration
                </h3>
                <p className="text-gray-600 mb-6">
                  Our success comes from seamless teamwork and shared expertise across all disciplines.
                </p>
                <div className="bg-white p-6 rounded-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">100%</div>
                      <div className="text-sm text-gray-600">Coverage</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">50+</div>
                      <div className="text-sm text-gray-600">Experts</div>
                    </div>
                  </div>
                </div>
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
              Ready to Work With Our Expert Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our talented professionals can help bring your project to life.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default OurTeamPage;