"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <Image
            width={200}
            height={200}
            src="/assets/images/salonImg5.jpg"
            alt="Why Choose Us"
            className="rounded-3xl shadow-lg object-cover w-full h-[400px]"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Why Choose <span className="text-yellow-500">Glamour Salon</span>?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At Glamour Salon, we combine expertise, passion, and premium care
            to give you an unforgettable beauty experience. Our stylists are
            continuously trained in the latest trends and techniques. We use
            only cruelty-free and eco-friendly products to keep you and the
            environment safe. We believe every client deserves personalized
            attention and a look that boosts confidence.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>Certified & Experienced Stylists</li>
            <li>Premium, Sustainable Products</li>
            <li>Relaxing & Hygienic Environment</li>
            <li>Custom Services Tailored to You</li>
            <li>Easy Online Booking & Flexible Hours</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
