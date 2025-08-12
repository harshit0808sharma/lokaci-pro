"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "/assets/images/salonImg5.jpg",
  "/assets/images/salonImg6.jpg",
  "/assets/images/salonImg5.jpg",
  "/assets/images/salonImg6.jpg",
  "/assets/images/salonImg5.jpg",
  "/assets/images/salonImg6.jpg",
];

export default function SalonGallery() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 text-center mb-12"
        >
          Inside Our Salon
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <Image
                src={src}
                alt={`Salon view ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
