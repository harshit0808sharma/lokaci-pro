'use client'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { HomeContext } from "../context/HomeContext";
import Link from "next/link";

export default function FaqPage() {
    const { faqs } = useContext(HomeContext);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-black to-gray-500 text-white py-28">
                <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Frequently Asked <span className="text-yellow-300">Questions</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-lg md:text-xl max-w-2xl mb-8"
                    >
                        Find answers to the most common questions about our services, bookings, and policies.
                    </motion.p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white py-16 px-6 w-full my-20">
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
                        {faqs.map((faq, index) => {
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
            </section>
            <section className="bg-gray-100 text-black py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
                    <p className="mb-6 max-w-xl mx-auto">
                        If you can’t find what you’re looking for, our team is here to help! Reach out anytime and we’ll get back to you as soon as possible.
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-pink-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-pink-700 transition"
                        aria-label="Email Glamour Salon Support"
                    >
                        Contact Support
                    </Link>
                </div>
            </section>

            <section className="bg-white py-16 px-6 text-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
                    <p className="mb-6 max-w-xl mx-auto">
                        Subscribe to our newsletter for the latest salon tips, offers, and FAQs.
                    </p>
                    <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-600 flex-grow"
                            aria-label="Email address"
                        />
                        <button
                            type="submit"
                            className="bg-pink-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-pink-700 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>


            <Footer />
        </>
    );
}
