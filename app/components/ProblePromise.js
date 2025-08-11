"use client";
import { motion } from "framer-motion";

const ProblemPromise = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section className="w-full bg-gray-100 py-16 px-6">
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="flex-1 max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-black mb-6"
        >
          Every Day You Don&apos;t Have Lokaci Pro, You&apos;re Bleeding Money
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl font-semibold text-gray-800 mb-10"
        >
          Your salon could be making 40% more revenue. Here&apos;s what&apos;s secretly killing your profits:
        </motion.p>

        <motion.div
          className="space-y-8 text-left"
          variants={containerVariants}
        >
          {[
            {
              icon: "📱",
              title: "WhatsApp Booking Chaos",
              desc: "Missed messages = missed money. That customer who couldn&apos;t reach you? They went to your competitor."
            },
            {
              icon: "📝",
              title: "Manual Everything",
              desc: "You&apos;re spending 3+ hours daily on paperwork instead of serving customers. That&apos;s ₹50,000+ in lost revenue monthly."
            },
            {
              icon: "🤷‍♀️",
              title: "Ghost Customers",
              desc: "60% of your customers visit once and never return. You have no system to bring them back."
            },
            {
              icon: "💸",
              title: "Staff Commission Confusion",
              desc: "Arguments over payments kill team morale. Unhappy staff = unhappy customers = lost revenue."
            },
            {
              icon: "📊",
              title: "Flying Blind",
              desc: "Which services make money? Which don&apos;t? You&apos;re guessing instead of knowing."
            }
          ].map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4"
            >
              <span className="text-2xl">{problem.icon}</span>
              <div>
                <h4 className="font-bold text-lg text-black">{problem.title}</h4>
                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: problem.desc }} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <h3 className="text-2xl font-bold text-green-600">
            Lokaci Pro eliminates every single one of these problems in 24 hours.
          </h3>
          <p className="text-lg text-gray-800 mt-4">
            Transform your salon from chaotic to profitable with India&apos;s most powerful salon management platform.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition cursor-pointer">
            See How It Works
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProblemPromise;
