'use client';
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import lokaciLogo from '../../public/assets/images/lokacilogo4.png';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const messageHandler = (e) => {
    e.preventDefault();
    toast.success('Thank You for Your Message!');
  };

  return (
    <>
      <Header />
      <section className="bg-white text-black py-16 px-6 my-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              We’d love to hear from you! Whether it’s booking an appointment,
              asking a question, or giving feedback — we’re here to help.
            </p>

            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-black text-xl" />
                <span className="text-lg">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-black text-xl" />
                <span className="text-lg">info@lokaci.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-black text-xl" />
                <span className="text-lg">Lokaci H.Q., Sector 117, Noida, India</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaClock className="text-black text-xl" />
                <span className="text-lg">Mon - Sun: 9:00 AM - 8:00 PM</span>
              </div>
            </div>

            <div className="flex items-center w-full mt-5">
              <Link href="/" className="h-12 my-4">
                <div className="relative w-full h-full">
                  <Image
                    src={lokaciLogo}
                    alt="Lokaci Logo"
                    // fill
                    width={250}
                    height={80}
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="bg-white text-black rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
              <button
                type="submit"
                onClick={messageHandler}
                className="w-full bg-gray-800 text-white font-semibold py-3 rounded-md cursor-pointer hover:bg-gray-900 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </section>
      <Footer />
    </>
  );
}
