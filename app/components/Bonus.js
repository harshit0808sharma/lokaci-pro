'use client'
import { motion } from "framer-motion";

const Bonus = () => {
    return (
        <div className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-gray-800 w-full bg-black text-white">
            <div className="max-w-5xl mx-auto text-center mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight"
                >
                    🎥 See the Power of Automation in Just 2 Minutes
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg"
                >
                    Watch how real salon owners use Lokaci Pro to turn chaos into
                    control — and double their revenue.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-800 to-gray-700 border border-rose-300 rounded-2xl p-10 max-w-4xl mx-auto text-center shadow-lg"
            >
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                    ⚡ Limited Time Launch Offer
                </h3>
                <p className="text-lg mb-6">
                    Save ₹2,000 on your first year –{" "}
                    <span className="font-bold text-green-400">
                        Only 47 Spots Left!
                    </span>
                </p>

                <ul className="text-gray-300 text-sm sm:text-base mb-8 space-y-1">
                    <li>✅ 30-day money-back guarantee</li>
                    <li>✅ Start seeing results in 24 hours</li>
                    <li>✅ No setup fees</li>
                </ul>

                <motion.a
                    href="#pricing"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block bg-rose-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-md hover:bg-rose-700 transition"
                >
                    🎯 Claim Your Discount Now
                </motion.a>
            </motion.div>
        </div>
    );
};

export default Bonus;
