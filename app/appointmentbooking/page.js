// 'use client';

// import { useState } from 'react';
// import toast from 'react-hot-toast';
// import { motion } from 'framer-motion';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const services = [
//   "Haircut",
//   "Hair Coloring",
//   "Makeup",
//   "Manicure & Pedicure",
//   "Massage Therapy",
//   "Facial Treatment",
// ];

// export default function AppointmentBooking() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     date: '',
//     time: '',
//     service: '',
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const validateForm = () => {
//     const { name, email, phone, date, time, service } = formData;
//     if (!name || !email || !phone || !date || !time || !service) {
//       toast.error("Please fill all fields");
//       return false;
//     }
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       toast.error("Please enter a valid email");
//       return false;
//     }
//     if (!/^\d{10}$/.test(phone)) {
//       toast.error("Please enter a valid 10-digit phone number");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       toast.success("Appointment booked successfully!");
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         date: '',
//         time: '',
//         service: '',
//       });
//     }, 1500);
//   };

//   return (
//    <>
//     <Header/>
//      <section className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center justify-center px-6 py-20 mt-10">
//       <motion.div
//         className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-12 md:p-16"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: 'easeOut' }}
//       >
//         <h1 className="text-4xl font-extrabold mb-8 text-pink-700 text-center tracking-wide">
//           Book Your Appointment
//         </h1>

//         <form className="space-y-8" onSubmit={handleSubmit} noValidate>
//           {/* Name */}
//           <motion.div whileFocusWithin={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
//             <label htmlFor="name" className="block text-pink-700 font-semibold mb-3">
//               Full Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your full name"
//               className="w-full px-5 py-3 border-2 border-pink-300 rounded-xl focus:outline-none focus:border-pink-600 transition"
//               required
//             />
//           </motion.div>

//           {/* Email */}
//           <motion.div whileFocusWithin={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
//             <label htmlFor="email" className="block text-pink-700 font-semibold mb-3">
//               Email Address
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="you@example.com"
//               className="w-full px-5 py-3 border-2 border-pink-300 rounded-xl focus:outline-none focus:border-pink-600 transition"
//               required
//             />
//           </motion.div>

//           {/* Phone */}
//           <motion.div whileFocusWithin={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
//             <label htmlFor="phone" className="block text-pink-700 font-semibold mb-3">
//               Phone Number
//             </label>
//             <input
//               id="phone"
//               name="phone"
//               type="tel"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="10-digit number"
//               maxLength={10}
//               className="w-full px-5 py-3 border-2 border-pink-300 rounded-xl focus:outline-none focus:border-pink-600 transition"
//               required
//             />
//           </motion.div>

//           {/* Date & Time */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <motion.div whileFocusWithin={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
//               <label htmlFor="date" className="block text-pink-700 font-semibold mb-3">
//                 Date
//               </label>
//               <input
//                 id="date"
//                 name="date"
//                 type="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 className="w-full px-5 py-3 border-2 border-pink-300 rounded-xl focus:outline-none focus:border-pink-600 transition"
//                 required
//                 min={new Date().toISOString().split('T')[0]}
//               />
//             </motion.div>

//             <motion.div whileFocusWithin={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
//               <label htmlFor="time" className="block text-pink-700 font-semibold mb-3">
//                 Time
//               </label>
//               <input
//                 id="time"
//                 name="time"
//                 type="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 className="w-full px-5 py-3 border-2 border-pink-300 rounded-xl focus:outline-none focus:border-pink-600 transition"
//                 required
//                 min="09:00"
//                 max="20:00"
//               />
//             </motion.div>
//           </div>

//           {/* Service */}
//           <motion.div whileFocusWithin={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
//             <label htmlFor="service" className="block text-pink-700 font-semibold mb-3">
//               Choose Service
//             </label>
//             <select
//               id="service"
//               name="service"
//               value={formData.service}
//               onChange={handleChange}
//               className="w-full px-5 py-3 border-2 border-pink-300 rounded-xl focus:outline-none focus:border-pink-600 transition"
//               required
//             >
//               <option value="">Select a service</option>
//               {services.map((srv, i) => (
//                 <option key={i} value={srv}>{srv}</option>
//               ))}
//             </select>
//           </motion.div>

//           <motion.button
//             type="submit"
//             disabled={loading}
//             whileTap={{ scale: 0.97 }}
//             className={`w-full py-4 rounded-xl font-semibold text-white shadow-lg transition ${loading
//                 ? "bg-pink-300 cursor-not-allowed"
//                 : "bg-pink-600 hover:bg-pink-700"
//               }`}
//           >
//             {loading ? "Booking..." : "Book Appointment"}
//           </motion.button>
//         </form>
//       </motion.div>
//     </section>
//     <Footer/>
//    </>
//   );
// }
