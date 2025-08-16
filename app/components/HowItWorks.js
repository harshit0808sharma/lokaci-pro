'use client'

import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { Heading } from "./other/Heading";

const HowItWorks = () => {
  const { steps } = useContext(HomeContext);

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white w-full py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <Heading Heading1={" From Chaos to Cash Flow in "} Heading2={" 3 Simple Steps "}/>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-10 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white text-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              {/* Step Number & Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500 text-white text-xl font-bold">
                  {index + 1}
                </div>
                <div className="text-indigo-500 text-2xl">{step.icon}</div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
              </div>

              {/* Step Points */}
              <ul className="space-y-3">
                {step.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <FaCheckCircle className="text-green-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: steps.length * 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
          >
           {" Try It Free – No Setup Cost "}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
