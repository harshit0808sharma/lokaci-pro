'use client';
import { motion } from "framer-motion";
import { FaWhatsapp, FaRegFileAlt, FaUserAltSlash, FaMoneyBillWave, FaChartLine } from "react-icons/fa";
import Link from "next/link";

const problems = [
  {
    icon: <FaWhatsapp className="text-4xl text-green-500" />,
    title: "WhatsApp Booking Chaos",
    desc: "Missed messages = missed money. That customer who couldn't reach you? They went to your competitor."
  },
  {
    icon: <FaRegFileAlt className="text-4xl text-blue-500" />,
    title: "Manual Everything",
    desc: "You're spending 3+ hours daily on paperwork instead of serving customers. That's ₹50,000+ in lost revenue monthly."
  },
  {
    icon: <FaUserAltSlash className="text-4xl text-yellow-500" />,
    title: "Ghost Customers",
    desc: "60% of your customers visit once and never return. You have no system to bring them back."
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-red-500" />,
    title: "Staff Commission Confusion",
    desc: "Arguments over payments kill team morale. Unhappy staff = unhappy customers = lost revenue."
  },
  {
    icon: <FaChartLine className="text-4xl text-purple-500" />,
    title: "Flying Blind",
    desc: "Which services make money? Which don't? You're guessing instead of knowing."
  },
];

const ProblemPromiseSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-6"
        >
          Every Day You Don't Have Lokaci Pro, You're Bleeding Money
        </motion.h2>

        {/* Reality Check */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12"
        >
          Your salon could be making 40% more revenue. Here's what's secretly killing your profits:
        </motion.p>

        {/* Problems Timeline */}
        {problems.map((problem, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Icon */}
            <div className="flex-shrink-0 p-6 bg-white rounded-full shadow-lg">
              {problem.icon}
            </div>

            {/* Text */}
            <div className="bg-white p-8 rounded-xl shadow-lg md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-700 text-lg">{problem.desc}</p>
            </div>
          </motion.div>
        ))}

        {/* Promise / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            Lokaci Pro eliminates every single one of these problems in 24 hours.
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Transform your salon from chaotic to profitable with India's most powerful salon management platform.
          </p>
          <Link
            href="/how-it-works"
            className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition font-semibold text-lg"
          >
            See How It Works
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemPromiseSection;
