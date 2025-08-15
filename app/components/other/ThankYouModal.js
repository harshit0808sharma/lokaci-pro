import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { ImCross } from "react-icons/im";

export default function ThankYouModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-lg p-6 relative flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={onClose}
            >
              <ImCross className="text-2xl" />
            </button>

            {/* Icon & Text */}
            <FcOk className="text-6xl mb-4" />
            <h2 className="text-3xl font-bold mb-2 text-center">Thank You!</h2>
            <p className="text-gray-600 text-center mb-6">
              Your message has been sent successfully.
            </p>

            {/* Bottom Section */}
            <div className="w-full flex justify-between items-center mt-4">
              {/* Social Icons */}
              <div className="flex space-x-3">
                <Link href="/" target="_blank" className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-200">
                  <FaFacebookF />
                </Link>
                <Link href="/" target="_blank" className="w-10 h-10 flex justify-center items-center rounded-full bg-pink-50 text-pink-500 hover:bg-pink-200">
                  <FaInstagram />
                </Link>
                <Link href="/" target="_blank" className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-50 text-blue-700 hover:bg-blue-200">
                  <FaLinkedinIn />
                </Link>
                <Link href="/" target="_blank" className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-50 text-blue-500 hover:bg-blue-200">
                  <FaTwitter />
                </Link>
              </div>

              {/* Visit Website */}
              <Link
                href="https://lokaci.com"
                target="_blank"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Visit Our Website
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
