'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6 p-10 bg-white rounded-2xl shadow-xl"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-gray-900 font-extrabold text-5xl text-center"
        >
          404
        </motion.h1>
        <p className="text-lg text-gray-600 text-center">
          {"Oops! The page you’re looking for doesn’t exist."}
        </p>
        <Link
          href="/"
          className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
        >
          <FaHome /> Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
