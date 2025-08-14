'use client';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaClipboardList, FaUserFriends, FaDollarSign, FaChartBar } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const steps = [
  {
    icon: <FaWhatsapp className="text-4xl text-green-500" />,
    title: "WhatsApp Booking Automation",
    description:
      "Never miss a customer! Automate bookings directly through WhatsApp and increase conversions.",
  },
  {
    icon: <FaClipboardList className="text-4xl text-blue-500" />,
    title: "Automated Paperwork",
    description:
      "Spend less time on manual tasks. Lokaci Pro handles bookings, billing, and customer records automatically.",
  },
  {
    icon: <FaUserFriends className="text-4xl text-purple-500" />,
    title: "Customer Retention System",
    description:
      "Bring back 60%+ of one-time customers with automated follow-ups and personalized offers.",
  },
  {
    icon: <FaDollarSign className="text-4xl text-yellow-500" />,
    title: "Staff & Commission Management",
    description:
      "Track staff commissions accurately. Happy staff = happy customers = more revenue.",
  },
  {
    icon: <FaChartBar className="text-4xl text-red-500" />,
    title: "Business Analytics",
    description:
      "Know which services generate revenue and which don’t. Make informed decisions with clear insights.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-800 py-20 mt-10">
        <section className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How Lokaci Pro Works
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Transform your salon from chaotic to profitable in just 24 hours.
            Here’s how we make it happen:
          </motion.p>

          {/* Steps */}
          <div className="grid md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-lg text-left flex items-start space-x-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div>{step.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <a
              href="/contact"
              className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition"
            >
              Get Started with Lokaci Pro
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
