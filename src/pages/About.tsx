import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Award } from 'lucide-react';
import { FOUNDERS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">About Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Pioneering the future of cybersecurity and network optimization
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-gray-900/50 backdrop-blur-md">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300">
              At Astraeus Next Gen, we're dedicated to revolutionizing cybersecurity and network infrastructure. 
              Our mission is to provide cutting-edge solutions that protect and optimize digital assets for 
              organizations worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-black">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Security</h3>
              <p className="text-gray-400">
                Unwavering commitment to protecting digital assets and infrastructure
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card"
            >
              <Users className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-400">
                Working together to create innovative solutions for complex challenges
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <Target className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-400">
                Striving for the highest standards in everything we do
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <Award className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-400">
                Pushing boundaries to develop groundbreaking solutions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section bg-gray-900/50 backdrop-blur-md">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Our Leadership
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {FOUNDERS.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 mx-auto"
                />
                <h3 className="text-2xl font-bold text-center mb-2">{founder.name}</h3>
                <p className="text-gray-400 text-center mb-4">{founder.role}</p>
                <div className="text-center">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section bg-black">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-300 mb-8">
              Founded in 2025, Astraeus Next Gen has quickly established itself as a pioneer in 
              cybersecurity and network optimization. Our innovative solutions have helped 
              organizations across the globe protect and enhance their digital infrastructure.
            </p>
              <div className="card">
                <h3 className="text-3xl font-bold text-green-500 mb-2">24/7</h3>
                <p className="text-gray-400">Support Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
