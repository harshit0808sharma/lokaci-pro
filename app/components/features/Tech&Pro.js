"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "Advanced Hair Care",
    description:
      "Utilizing cutting-edge technology to ensure healthy, vibrant hair with every treatment.",
    icon: "💇‍♀️",
  },
  {
    name: "Eco-Friendly Products",
    description:
      "We use only cruelty-free, organic, and sustainable products for a greener beauty experience.",
    icon: "🌿",
  },
  {
    name: "Skin Analysis Tools",
    description:
      "Our advanced skin analysis devices help us customize facials and treatments for your unique needs.",
    icon: "🔬",
  },
  {
    name: "Sanitization & Safety",
    description:
      "State-of-the-art sterilization equipment ensures the highest hygiene standards for your peace of mind.",
    icon: "🧼",
  },
];

export default function TechnologyProducts() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-12"
        >
          Our Technology & Products
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-pink-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-default"
            >
              <div className="text-5xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {tech.name}
              </h3>
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
