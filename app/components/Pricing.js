'use client'

import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const PricingPlans = () => {
  const { plans } = useContext(HomeContext);

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-black mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Simple Pricing That Pays for Itself
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 italic mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          No contracts. No hidden fees. Cancel anytime. But you won't want to.
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`border rounded-xl p-6 text-left shadow-sm transition-all hover:shadow-lg hover:scale-105 ${
                plan.highlight
                  ? "border-black bg-black text-white"
                  : "bg-yellow-50 text-black"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Plan Header */}
              <div className="text-2xl font-bold mb-2">
                {plan.emoji} {plan.name}
              </div>
              <div className="text-xl font-semibold">{plan.price}</div>
              <div className="text-sm opacity-80 mb-4">({plan.monthly})</div>
              <p className="font-medium mb-4">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-2 text-sm">
                {plan.features.map((feat, i) => (
                  <li key={i}>• {feat}</li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-4 flex items-center gap-2 italic px-4 py-2 rounded border-2 cursor-pointer ${
                  plan.highlight
                    ? "border-white text-white hover:bg-white hover:text-black"
                    : "border-black text-black hover:bg-black hover:text-white"
                } transition`}
              >
                <span>{plan.note}</span> <FaExternalLinkAlt className="text-blue-600"/>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: plans.length * 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-black">
            💡 Add-Ons Available
          </h3>
          <ul className="list-disc pl-5 text-gray-800 space-y-1">
            <li>Extra WhatsApp Messages: ₹1,000 / 1000 messages</li>
            <li>White-labeled Customer App: ₹5,000/year</li>
            <li>Advanced Franchise Dashboard: ₹10,000/year</li>
          </ul>
        </motion.div>

        {/* Launch Offer */}
        <motion.div
          className="mt-10 bg-black text-white p-6 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: plans.length * 0.2 + 0.2 }}
        >
          <h4 className="text-xl font-semibold mb-2">🎁 Launch Offer</h4>
          <p>
            Save ₹2,000 – Use code{" "}
            <span className="font-bold">SALON2025</span>
          </p>
          <p className="italic text-sm opacity-80">
            *Limited time offer for the first 100 signups*
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
