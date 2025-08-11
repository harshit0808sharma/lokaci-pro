'use client'

import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const { steps } = useContext(HomeContext);

  return (
    <section className="bg-gray-100 w-full py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-black mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          From Chaos to Cash Flow in 3 Simple Steps
        </motion.h2>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-black text-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Step Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-indigo-400">{step.icon}</div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>

              {/* Step Points */}
              <ul className="space-y-2 text-gray-300">
                {step.points.map((point, i) => (
                  <li key={i}>
                    {point.startsWith("*") && point.endsWith("*") ? (
                      <em className="block text-sm text-gray-400">
                        {point.replace(/\*/g, "")}
                      </em>
                    ) : (
                      "• " + point
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: steps.length * 0.2 }}
        >
          <button className="bg-black text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
            Try It Free – No Setup Cost
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
