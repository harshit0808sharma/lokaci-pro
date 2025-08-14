'use client';

import { HomeContext } from '@/app/context/HomeContext';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiUser } from 'react-icons/fi';

export default function ClientTestimonials() {
  const { testimonials } = useContext(HomeContext) || { testimonials: [] };
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="bg-white py-16 text-center text-gray-500">
        Loading testimonials...
      </section>
    );
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const { image, name, review } = testimonials[currentIndex];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mb-6">
            Our customers are our biggest cheerleaders! Here’s what they have to say about our salon’s services, ambiance, and friendly staff. Your trust keeps us going.
          </p>
          <p className="text-pink-500 font-semibold">
            Join hundreds of happy clients today.
          </p>
        </motion.div>

        {/* RIGHT SIDE TESTIMONIAL */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gray-100 rounded-xl shadow-lg p-8 text-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {image?.src ? (
                <Image
                  src={image.src}
                  alt={name}
                  width={80}
                  height={80}
                  className="object-cover rounded-full mx-auto mb-4 border-4 border-pink-500 shadow"
                  priority
                />
              ) : (
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-300 rounded-full border-4 border-white shadow">
                  <FiUser size={40} className="text-gray-500" />
                </div>
              )}

              <p className="text-gray-600 italic mb-4">
                &quot;{review}&quot;
              </p>
              <h3 className="text-lg font-semibold text-pink-500">{name}</h3>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <button
              aria-label="Previous testimonial"
              onClick={prevTestimonial}
              className="bg-white p-2 rounded-full shadow hover:bg-pink-100 transition"
            >
              <FiChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <button
              aria-label="Next testimonial"
              onClick={nextTestimonial}
              className="bg-white p-2 rounded-full shadow hover:bg-pink-100 transition"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
