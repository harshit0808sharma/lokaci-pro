'use client'
import { FaQuestionCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { HomeContext } from '../context/HomeContext';
import { motion } from 'framer-motion';

const FAQ = () => {
  const { faqs } = useContext(HomeContext);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" }
    })
  };

  return (
    <section className="bg-white py-16 px-6 w-full">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-black mb-12"
        >
          Everything You Need to Know
        </motion.h2>

        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 border border-gray-200 rounded-md p-5 shadow-sm cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-2">
                <FaQuestionCircle className="text-indigo-600 mt-1" />
                <h3 className="font-semibold text-lg text-black">
                  {faq.question}
                </h3>
              </div>
              <p className="text-gray-700">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
