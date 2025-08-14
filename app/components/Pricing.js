'use client';

import { motion } from 'framer-motion';
import { useContext } from 'react';
import { HomeContext } from '../context/HomeContext';


export default function Pricing() {
  const { plans } = useContext(HomeContext);
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-gray-100 to-white text-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Simple Pricing That Pays for Itself
        </motion.h2>
        
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-gray-800 mb-16"
        >
          {"No contracts. No hidden fees. Cancel anytime. But you won't want to."}
        </motion.p>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              className={`relative rounded-2xl p-8 shadow-lg border ${
                plan.highlight
                  ? 'bg-green-500 text-black border-red-400'
                  : 'bg-gray-100 border-gray-700'
              }`}
            >
              <div className="text-5xl mb-4">{plan.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className="text-3xl font-extrabold">{plan.price}</p>
              <p className="text-sm text-gray-600 mb-4">{plan.subPrice}</p>
              <p className="mb-6">{plan.desc}</p>
              
              <ul className="text-left mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span>✅</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p
                className={`italic text-sm ${
                  plan.highlight ? 'text-gray-800' : 'text-black-300'
                }`}
              >
                {plan.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-left max-w-4xl mx-auto"
        >
          <h4 className="text-2xl font-bold mb-4">💡 Add-Ons Available</h4>
          <ul className="space-y-2 text-gray-600">
            <li>• Extra WhatsApp Messages: ₹1,000/1000 messages</li>
            <li>• White-labeled Customer App: ₹5,000/year</li>
            <li>• Advanced Franchise Dashboard: ₹10,000/year</li>
          </ul>
        </motion.div>

        {/* Launch Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-12 p-6 rounded-lg border border-red-400 bg-red-500 text-black inline-block"
        >
          🎁 <strong>Launch Offer:</strong> Save ₹2,000 – Use code{' '}
          <span className="font-bold">SALON2025</span>  
          <p className="mt-1 text-sm">Limited time offer for the first 100 signups</p>
        </motion.div>
      </div>
    </section>
  );
}
