'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 20,
      ease: 'easeInOut',
      duration: 0.6,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 md:pt-20
             bg-[url('/assets/images/salonImg8.jpg')] bg-cover bg-center bg-no-repeat">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full flex flex-col items-center text-center gap-10 text-white"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Stop Losing Money to{' '}
          <span className="text-yellow-300">
            Salon Chaos
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-lg md:text-xl mb-6 font-light"
        >
          {"The only salon management platform that actually increases your revenue while cutting your workload in half. Trusted by 3,000+ salons across India."}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mb-8 text-yellow-200 font-semibold"
        >
          {"From missed appointments to manual billing nightmares - we've solved every problem that's costing you customers and sleep."}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition font-semibold cursor-pointer"
          >
            Get My Salon Organized - ₹7,000/year
          </motion.a>
          <motion.a
            href="/video"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="border border-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition font-semibold cursor-pointer"
          >
            Watch 2-Min Demo
          </motion.a>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-sm italic text-yellow-300"
        >
          {"“Lokaci Pro pays for itself in the first month” – 97% of our customers"}
        </motion.p>
      </motion.div>
    </section>
  );
}

