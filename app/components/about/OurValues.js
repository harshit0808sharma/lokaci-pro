"use client";
import { motion } from "framer-motion";

const values = [
  {
    title: "Customer First",
    description:
      "Every service is tailored to your needs, ensuring you leave feeling confident and beautiful.",
    icon: "💖",
  },
  {
    title: "Sustainability",
    description:
      "We use eco-friendly and cruelty-free products to protect your beauty and the planet.",
    icon: "🌿",
  },
  {
    title: "Excellence",
    description:
      "Our skilled stylists undergo continuous training to deliver the highest quality service.",
    icon: "🏆",
  },
];

export default function OurValues() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Values & Philosophy
          </h2>
          <p className="text-gray-600 text-lg">
            At our salon, we believe in more than just beauty — we believe in
            creating an experience that uplifts you, supports sustainability,
            and delivers excellence every single time.
          </p>
        </motion.div>

        {/* Right Side */}
        <div className="md:w-1/2 grid gap-8 sm:grid-cols-2">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition text-center"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
