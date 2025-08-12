"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import img from '../../../public/assets/images/salonImg5.jpg'

export default function AboutHero() {
  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">

      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={img}
          alt="Luxury Salon"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="relative text-center text-white px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          About Our Salon
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Experience beauty & relaxation like never before.
        </p>
      </motion.div>

    </section>
  );
}
