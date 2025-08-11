"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white text-black min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Stop Losing Money to <span className="text-gray-800">Salon Chaos</span>
          </motion.h1>

          <motion.h2
            className="text-lg md:text-xl text-gray-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The only salon management platform that actually increases your revenue
            while cutting your workload in half. Trusted by 3,000+ salons across India.
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {"From missed appointments to manual billing nightmares - we've solved every problem that's costing you customers and sleep."}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              href="#pricing"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Get My Salon Organized - ₹7,000/year
            </Link>
            <Link
              href="/video"
              className="border border-black px-6 py-3 rounded-lg hover:bg-green-500 hover:text-white transition"
            >
              Watch 2-Min Demo
            </Link>
          </motion.div>

          <motion.div
            className="mt-6 text-sm text-gray-500 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            “Lokaci Pro pays for itself in the first month” – 97% of our customers
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/assets/images/saloonImg1.jpg"
            alt="Salon Management"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
