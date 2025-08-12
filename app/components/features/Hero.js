"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturesHero() {
  return (
    <section className="bg-gradient-to-r from-black to-gray-500 text-white py-28">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Discover the Unique Features of{" "}
          <span className="text-yellow-300">Glamour Salon</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mb-8"
        >
          From luxurious treatments to expert stylists — see what makes us the go-to beauty destination.
        </motion.p>

        <Link href="/appointmentbooking" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition">
            Book Your Experience
        </Link>

      </div>
    </section>
  );
}
