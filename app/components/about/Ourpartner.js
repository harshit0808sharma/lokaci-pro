"use client";
import { motion } from "framer-motion";

const partners = [
  { name: "L'Oréal", logo: "/assets/images/partner1.png" },
  { name: "Schwarzkopf", logo: "/assets/images/partner2.png" },
  { name: "MAC Cosmetics", logo: "/assets/images/partner3.png" },
  { name: "Kerastase", logo: "/assets/images/partner4.png" },
  { name: "Olaplex", logo: "/assets/images/partner5.png" },
];

export default function OurPartners() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-12"
        >
          Our Trusted Partners
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center bg-pink-50 p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-32 h-16 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
