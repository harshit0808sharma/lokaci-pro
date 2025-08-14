"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../../public/assets/images/salonProduct1.png";
import img2 from "../../../public/assets/images/salonProduct2.png";
import img3 from "../../../public/assets/images/salonProduct3.png";
import img4 from "../../../public/assets/images/salonProduct4.png";
import img5 from "../../../public/assets/images/salonProduct5.png";
import img6 from "../../../public/assets/images/salonProduct6.png";
import img7 from "../../../public/assets/images/salonProduct7.png";
import img8 from "../../../public/assets/images/salonProduct8.png";
import img9 from "../../../public/assets/images/salonProduct9.png";
import img10 from "../../../public/assets/images/salonProduct10.png";

const technologies = [
  { name: "Advanced Hair Care", description: "Utilizing cutting-edge technology to ensure healthy, vibrant hair with every treatment.", icon: "💇‍♀️" },
  { name: "Eco-Friendly Products", description: "We use only cruelty-free, organic, and sustainable products for a greener beauty experience.", icon: "🌿" },
  { name: "Skin Analysis Tools", description: "Our advanced skin analysis devices help us customize facials and treatments for your unique needs.", icon: "🔬" },
  { name: "Sanitization & Safety", description: "State-of-the-art sterilization equipment ensures the highest hygiene standards for your peace of mind.", icon: "🧼" }
];

const products = [
  { id: 1, name: "Hair Oil", image: img1 },
  { id: 2, name: "Shampoo", image: img2 },
  { id: 3, name: "Hair Dryer", image: img3 },
  { id: 4, name: "Conditioner", image: img4 },
  { id: 5, name: "Hair Serum", image: img5 },
  { id: 6, name: "Comb Set", image: img6 },
  { id: 7, name: "Straightener", image: img7 },
  { id: 8, name: "Hair Spray", image: img8 },
  { id: 9, name: "Beard Oil", image: img9 },
  { id: 10, name: "Hair Mask", image: img10 },
];

export default function TechnologyProducts() {
  return (
    <div className="w-full">
      {/* Technology Section */}
      <section className="bg-gray-50 py-20">
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
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-default"
              >
                <div className="text-5xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Products Scroll */}
      <div className="overflow-hidden bg-gray-100 py-10">
        <motion.div
          className="flex gap-8"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...products, ...products].map((product) => (
            <div
              key={product.id + Math.random()}
              className="flex flex-col items-center bg-gray-600 p-6 rounded-2xl min-w-[200px] shadow-xl"
            >
              <div className="w-32 h-32 relative mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <span className="text-white text-lg font-semibold">{product.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
