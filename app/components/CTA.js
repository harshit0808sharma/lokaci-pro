'use client';

import Link from 'next/link';
import { FaCheckCircle, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const trustPoints = [
  "Zero setup fees – We handle everything",
  "24-hour onboarding – Start earning immediately",
  "30-day money-back guarantee – Risk-free trial",
  "Free data migration – Keep all your existing customer data",
  "24/7 support – We're here when you need us",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  }),
};

const CTASection = () => {
  return (
    <section className="bg-black text-white w-full py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        
        {/* Headline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Join <span className="text-yellow-400">3,000+</span> Salon Owners Who Chose Growth Over Chaos
          </h2>
          <p className="text-lg text-gray-300">
            Start your free demo today and see your first results tomorrow
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
        >
          <Link
            href="/demo"
            className="inline-block bg-yellow-400 text-black font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Start My Free Demo – See Results in 24 Hours
          </Link>
        </motion.div>

        {/* Secondary CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1.2}
          className="flex items-center justify-center gap-2 text-gray-400 text-sm"
        >
          <FaPhoneAlt className="text-yellow-400" />
          <span>Call Our Salon Expert: +91-XXXXX-XXXXX</span>
        </motion.div>

        {/* Trust Points */}
        <div className="grid sm:grid-cols-2 gap-4 text-left mt-10">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index * 0.2 + 1.4}
              className="flex items-start gap-3 bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition"
            >
              <FaCheckCircle className="text-green-400 mt-1" />
              <span>{point}</span>
            </motion.div>
          ))}
        </div>

        {/* Urgency Element */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={trustPoints.length * 0.2 + 1.6}
          className="mt-8 bg-yellow-500 text-black p-4 rounded-lg text-center font-medium shadow-lg flex items-center justify-center gap-2"
        >
          <FaClock />
          <span>Special Launch Pricing: Save ₹2,000 — expires in 5 days</span>
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;
