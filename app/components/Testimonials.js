'use client'
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useContext } from 'react';
import { HomeContext } from '../context/HomeContext';
import { motion } from 'framer-motion';
import { CgProfile } from "react-icons/cg";

const Testimonials = () => {
  const { testimonials } = useContext(HomeContext);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <section className="bg-gradient-to-br from-pink-50 to-purple-50 w-full py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative text-4xl md:text-5xl font-bold text-gray-900 mb-14"
        >
          Real Salon Owners, Real Results
          <span className="absolute left-1/2 -bottom-3 w-24 h-1 bg-pink-500 rounded-full transform -translate-x-1/2"></span>
        </motion.h2>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 text-left">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ rotate: -10, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <FaQuoteLeft className="text-indigo-500 text-3xl mb-4" />
              </motion.div>

              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-base" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">{t.review}</p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4">
                
                    <CgProfile/>
                
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.salon}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            className="bg-gradient-to-r from-yellow-500 to-red-500 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-2xl transition-all"
          >
            Join 3,000+ Happy Salons
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
