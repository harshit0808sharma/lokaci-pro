'use client'
import { FaQuestionCircle } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { HomeContext } from '../context/HomeContext';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const { faqs } = useContext(HomeContext);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
    <section className="py-16 px-6 max-w-6xl mx-auto">
                <motion.h2
                    className="text-3xl font-bold text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-4 max-w-3xl mx-auto">
                    {faqs?.map(({ question, answer }, idx) => (
                        <motion.div
                            key={idx}
                            className="border rounded-lg p-4 cursor-pointer bg-white shadow-sm"
                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                            initial={false}
                            animate={{ backgroundColor: openFaq === idx ? "#f3f4f6" : "#fff" }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex justify-between items-center">
                                <h4 className="font-semibold text-lg">{question}</h4>
                                <span className="text-xl select-none">
                                    {openFaq === idx ? "−" : "+"}
                                </span>
                            </div>
                            <AnimatePresence>
                                {openFaq === idx && (
                                    <motion.p
                                        className="mt-3 text-gray-700"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {answer}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </section>
    </>
  );
};

export default FAQ;
