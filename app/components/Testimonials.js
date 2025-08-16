"use client";
import { useContext, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar, FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import { HomeContext } from "../context/HomeContext";
import { Heading } from "./other/Heading";
import { motion, AnimatePresence } from "framer-motion";

export default function Review() {
  const { testimonials } = useContext(HomeContext);
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderStars = (count) => (
    <div className="flex justify-center text-yellow-400">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          className={`text-xl ${i < count ? "opacity-100" : "opacity-30"}`}
        />
      ))}
    </div>
  );

  const renderProfile = (img) =>
    img ? (
      <Image
        src={img}
        alt="Reviewer"
        width={56}
        height={56}
        className="w-14 h-14 rounded-full object-cover border border-gray-400"
      />
    ) : (
      <FaUserCircle className="text-gray-500 w-14 h-14" />
    );

  const prevIndex = (index - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (index + 1) % testimonials.length;

  return (
    <div className="min-h-screen flex flex-col gap-10 items-center bg-white md:px-20 py-20 text-black">
      {/* Heading */}
      <Heading Heading1={"Testimonials"} Heading2={""} />

      {/* Review Slider */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* Previous User */}
        <motion.div
          key={prevIndex}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-24 h-24 md:w-28 md:h-28 bg-gray-100 rounded-lg flex flex-col items-center justify-center shadow-inner"
        >
          {renderProfile(testimonials[prevIndex].img)}
          <span className="mt-1 text-xs text-gray-800">
            {testimonials[prevIndex].name}
          </span>
        </motion.div>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="text-3xl text-black hover:text-sky-400 transition"
        >
          <FaArrowLeft />
        </button>

        {/* Center Review Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full max-w-lg bg-gray-100 backdrop-blur-md text-black p-6 rounded-xl shadow-xl text-center space-y-5 border border-gray-800"
          >
            <div className="flex justify-center">
              {renderProfile(testimonials[index].img)}
            </div>
            <h4 className="text-lg font-bold">{testimonials[index].name}</h4>
            {renderStars(testimonials[index].rating)}
            <p className="text-gray-700">{testimonials[index].review}</p>
          </motion.div>
        </AnimatePresence>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="text-3xl text-black hover:text-sky-400 transition"
        >
          <FaArrowRight />
        </button>

        {/* Next User */}
        <motion.div
          key={nextIndex}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-24 h-24 md:w-28 md:h-28 bg-gray-100 rounded-lg flex flex-col items-center justify-center shadow-inner"
        >
          {renderProfile(testimonials[nextIndex].img)}
          <span className="mt-1 text-xs text-gray-800">
            {testimonials[nextIndex].name}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
