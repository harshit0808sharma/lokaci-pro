"use client";
import { useState } from "react";
import { FaUserCircle, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonialsData = [
  { name: "Michael Jackson", role: "CEO Of Company", text: "Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been industry's.", img: "", rating: 5 },
  { name: "Parvez Hossein", role: "CEO Of Company", text: "Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been industry's.", img: "", rating: 5 },
  { name: "Shoikot Hasan", role: "CEO Of Company", text: "Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been industry's.", img: "", rating: 5 },
  { name: "Jane Doe", role: "CEO Of Company", text: "Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been industry's.", img: "", rating: 4 },
  { name: "John Smith", role: "CEO Of Company", text: "Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been industry's.", img: "", rating: 5 },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;
  const cardWidth = 320;

  const prev = () => setIndex(prev => (prev === 0 ? testimonialsData.length - itemsPerPage : prev - 1));
  const next = () => setIndex(prev => (prev + itemsPerPage >= testimonialsData.length ? 0 : prev + 1));

  return (
    <div className="bg-gray-50 py-16 w-full">
      <h2 className="text-center text-5xl font-bold mb-12">
        Testimonials
      </h2>

      <div className="relative max-w-6xl mx-auto overflow-hidden shadow-2xl rounded-2xl p-12">
        {/* Motion container */}
        <motion.div
          className="flex gap-6"
          animate={{ x: -index * (cardWidth + 24) }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {testimonialsData.map((t, idx) => (
            <div
              key={t.name}
              className={`flex flex-col items-center rounded-2xl p-6 shadow-lg transform transition-transform duration-500 hover:scale-105 ${
                idx === index + 1 ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white scale-105" : "bg-white text-gray-800"
              } w-80 flex-shrink-0`}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                {t.img ? (
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-gray-300 to-gray-400">
                    <FaUserCircle className="w-12 h-12 text-white" />
                  </div>
                )}
              </div>

              <h3 className="font-semibold text-lg md:text-xl">{t.name}</h3>
              <p className="text-sm md:text-base opacity-80 mb-2">{t.role}</p>

              <div className="flex mb-3 text-yellow-400">
                {Array(t.rating).fill().map((_, i) => <FaStar key={i} />)}
              </div>

              <p className="text-center text-sm md:text-base italic opacity-80">"{t.text}"</p>
            </div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        {testimonialsData.length > itemsPerPage && (
          <>
            <button
              onClick={prev}
              className="absolute top-1/2 left-2 md:left-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-yellow-500 hover:text-white transition z-30"
            >
              <FaChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 right-2 md:right-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-yellow-500 hover:text-white transition z-30"
            >
              <FaChevronRight size={22} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
