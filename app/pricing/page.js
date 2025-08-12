'use client'

import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HomeContext } from "../context/HomeContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import FAQ from "../components/FAQ";

export default function PricingPage() {
    const { plans, testimonials } = useContext(HomeContext);

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
                        Simple & Transparent{" "}
                        <span className="text-yellow-300">Pricing Plans</span> Tailored for You
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-lg md:text-xl max-w-2xl mb-8"
                    >
                        Choose the perfect plan to enjoy premium salon services without any hidden fees or contracts.
                    </motion.p>

                    <Link
                        href="/appointmentbooking"
                        className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition"
                        aria-label="Book Your Appointment"
                    >
                        Book Your Appointment
                    </Link>
                </div>
            </section>

            {/* Plans */}
            <section className="w-full bg-white py-16 px-6 my-20">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Heading */}
                    <motion.h2
                        className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight"
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Simple Pricing That Pays for Itself
                    </motion.h2>

                    <motion.p
                        className="text-base sm:text-lg text-gray-700 italic mb-12 max-w-xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        No contracts. No hidden fees. Cancel anytime. But you won’t want to.
                    </motion.p>

                    {/* Pricing Cards */}
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {plans.map((plan, idx) => (
                            <motion.div
                                key={idx}
                                className={`relative border rounded-xl p-6 sm:p-8 shadow-sm cursor-pointer transition-all duration-300
                hover:shadow-2xl hover:scale-105
                ${plan.highlight
                                        ? "border-red-600 bg-red-600 text-white"
                                        : "border-gray-300 bg-gray-50 text-gray-900"
                                    }
              `}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                whileHover={{ y: -5 }}
                            >
                                {/* Badge for popular plan */}
                                {plan.highlight && (
                                    <span className="absolute top-4 right-4 bg-white text-pink-600 font-semibold px-3 py-1 rounded-full text-sm shadow-md select-none">
                                        {plan.note}
                                    </span>
                                )}

                                <div className="text-4xl mb-3">{plan.emoji}</div>
                                <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-2xl sm:text-3xl font-extrabold mb-1">
                                    {plan.price}
                                    <span className="text-sm sm:text-base font-medium ml-1 lowercase">{plan.monthly}</span>
                                </p>
                                <p className="mb-6 font-medium text-sm sm:text-base">{plan.description}</p>

                                <ul className="mb-6 space-y-2 text-left text-xs sm:text-sm">
                                    {plan.features.map((feat, i) => (
                                        <li
                                            key={i}
                                            className={`flex items-center ${plan.highlight ? "text-pink-100" : "text-gray-700"
                                                }`}
                                        >
                                            <svg
                                                className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-2 sm:py-3 rounded-md font-semibold transition
                  ${plan.highlight
                                            ? "bg-white text-pink-600 hover:bg-pink-100"
                                            : "border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
                                        }
                `}
                                >
                                    {plan.highlight ? "Get Started" : plan.note}
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Add-ons Section */}
                    <motion.div
                        className="mt-20 max-w-3xl mx-auto text-left px-4 sm:px-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: plans.length * 0.2 }}
                    >
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">💡 Add-Ons Available</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-800 text-xs sm:text-sm">
                            <li>Extra WhatsApp Messages: ₹1,000 / 1000 messages</li>
                            <li>White-labeled Customer App: ₹5,000/year</li>
                            <li>Advanced Franchise Dashboard: ₹10,000/year</li>
                        </ul>
                    </motion.div>

                    {/* Launch Offer */}
                    <motion.div
                        className="mt-14 bg-pink-700 text-white p-5 sm:p-6 rounded-lg text-center shadow-lg mx-4 sm:mx-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: plans.length * 0.2 + 0.3 }}
                    >
                        <h4 className="text-xl sm:text-2xl font-semibold mb-2">🎁 Launch Offer</h4>
                        <p className="text-base sm:text-lg">
                            Save ₹2,000 – Use code{" "}
                            <span className="font-bold uppercase tracking-wide">SALON2025</span>
                        </p>
                        <p className="italic text-xs sm:text-sm opacity-80 mt-1">
                            *Limited time offer for the first 100 signups*
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-black mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        What Our Customers Say
                    </motion.h2>

                    <div className="grid gap-8 md:grid-cols-3">
                        {testimonials?.map(({ name, feedback, avatar }, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white rounded-lg p-6 shadow-md"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.3 }}
                            >
                                <p className="italic text-gray-700 mb-4">{feedback}</p>
                                <div className="flex items-center gap-3">
                                    {/* <Image
                    src={avatar}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  /> */}
                                    <span className="font-semibold text-black">{name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ/>

            {/* Contact Call-To-Action */}
            <section className="bg-pink-600 text-white py-16 px-6 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    Ready to Transform Your Salon?
                </motion.h2>
                <motion.p
                    className="text-lg mb-8 max-w-xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    Get started today and experience the easiest salon management platform out there.
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-white text-blue-600 font-semibold rounded-lg px-6 py-3 shadow-md hover:bg-gray-100 transition"
                >
                    <FaPhoneAlt className="text-blue-600" /> Contact Sales
                </motion.button>
            </section>

            <Footer />
        </>
    );
}
