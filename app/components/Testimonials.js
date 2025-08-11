'use client'
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useContext } from 'react';
import { HomeContext } from '../context/HomeContext';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const { testimonials } = useContext(HomeContext);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <section className="bg-gray-100 w-full py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-black mb-12"
        >
          Real Salon Owners, Real Results
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 text-left">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <FaQuoteLeft className="text-indigo-600 text-2xl mb-4" />
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-sm" />
                ))}
              </div>
              <p className="text-gray-800 mb-4 italic">{t.review}</p>
              <p className="font-semibold text-black">{t.name}</p>
              <p className="text-sm text-gray-600">{t.salon}</p>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition"
          >
            Join 3,000+ Happy Salons
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
