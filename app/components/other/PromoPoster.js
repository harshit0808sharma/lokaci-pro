// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { IoCloseSharp } from "react-icons/io5";
// import Image from "next/image";
// import img from '../../../public/assets/images/salonoffer.png'
// import Link from "next/link";

// export default function PromoPoster() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 10000); 

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <>
//           <motion.div
//             className="fixed inset-0 backdrop-blur-md z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           />

//           {/* Modal content */}
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center z-60 p-6"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto p-8 flex flex-col md:flex-row gap-8">
//               {/* Close button */}
//               <button
//                 onClick={() => setIsVisible(false)}
//                 className="absolute top-5 right-5 text-gray-600 hover:text-gray-900 text-4xl focus:outline-none"
//                 aria-label="Close promo"
//               >
//                 <IoCloseSharp />
//               </button>

//               {/* Left: Poster Image */}
//               <div className="flex-1">
//                 <Image
//                   src={img}
//                   alt="Salon Promotion"
//                   className="rounded-2xl w-full h-auto object-cover max-h-[80vh]"
//                 />
//               </div>

//               {/* Right: Text content */}
//               <div className="flex-1 flex flex-col justify-center space-y-6 px-4">
//                 <h2 className="text-4xl font-extrabold text-pink-600">
//                   Exclusive Offer Just For You!
//                 </h2>
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   Get 20% off your first appointment. Book now and experience luxury like never before. Don’t miss out on this special deal designed to pamper you!
//                 </p>
//                 <Link
//                   href="/appointmentbooking"
//                   className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-pink-700 transition w-max"
//                 >
//                   Book Now
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }
