"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WhatWeOffer({ img }) {
  return (
    <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8 items-center">

      {/* Left Side */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          At Lokaci Salon, we believe in enhancing your natural beauty through expert care and premium treatments.
          From hair styling to skincare, our team ensures you get the best experience every time you visit.
        </p>
        <Link
          href="/appointmentbooking"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition"
        >
          Book an Appointment
        </Link>
      </motion.div>

      {/* Right Side*/}
      <motion.div
        className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src={img}
          alt="Salon Interior"
          fill
          className="object-cover"
        />
      </motion.div>

    </section>
  );
}
