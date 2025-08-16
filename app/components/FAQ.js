'use client'
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { HomeContext } from '../context/HomeContext';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const { faqs } = useContext(HomeContext);
    const [openIndex, setOpenIndex] = useState(null);
    const [visibleItem, setVisibleItems] = useState(false);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const showItems = visibleItem ? faqs : faqs.slice(0, 4);

    return (
        <>
            <section className="bg-white py-16 px-6 w-full my-20 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-black mb-12 text-center"
                    >
                        Everything You Need to Know
                    </motion.h2>

                    <div className="space-y-4">
                        {showItems.map((faq, index) => {
                            const isOpen = index === openIndex;
                            return (
                                <motion.div
                                    key={index}
                                    initial="collapsed"
                                    animate={isOpen ? "open" : "collapsed"}
                                    variants={{
                                        open: { boxShadow: "0 4px 15px rgba(0,0,0,0.1)" },
                                        collapsed: { boxShadow: "none" },
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer"
                                    onClick={() => toggleFaq(index)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter') toggleFaq(index); }}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-content-${index}`}
                                    aria-labelledby={`faq-title-${index}`}
                                >
                                    <div className="flex items-center gap-3 px-5 py-4 bg-gray-50">
                                        <FaQuestionCircle className="text-indigo-600 flex-shrink-0" size={20} />
                                        <h3
                                            id={`faq-title-${index}`}
                                            className="font-semibold text-lg text-gray-900 flex-grow"
                                        >
                                            {faq.question}
                                        </h3>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {isOpen ? (
                                                <FaChevronUp className="text-indigo-600" />
                                            ) : (
                                                <FaChevronDown className="text-indigo-600" />
                                            )}
                                        </motion.div>
                                    </div>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="content"
                                                id={`faq-content-${index}`}
                                                className="px-5 py-4 text-gray-700 bg-white"
                                                initial="collapsed"
                                                animate="open"
                                                exit="collapsed"
                                                variants={{
                                                    open: { height: "auto", opacity: 1, paddingTop: 16, paddingBottom: 16 },
                                                    collapsed: { height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 },
                                                }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <p>{faq.answer}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
                <button onClick={()=> setVisibleItems(!visibleItem)} className='bg-yellow-500 py-2 px-4 rounded-full text-black text-xl font-bold shadow-xl my-10 hover:bg-yellow-600 border-2 border-yellow-600'>{visibleItem ? "Show Less": "Show More"}</button>
            </section>
        </>
    );
};

export default FAQ;
