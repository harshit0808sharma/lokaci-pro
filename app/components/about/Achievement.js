"use client";
import { HomeContext } from "@/app/context/HomeContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";


export default function AwardsAchievements() {
  const { awards } = useContext(HomeContext);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 text-center mb-12"
        >
          Awards & Achievements
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition"
            >
              <Image
                src={award.image}
                alt={award.title}
                className="w-20 h-20 object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {award.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
