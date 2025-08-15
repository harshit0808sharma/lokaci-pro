// 'use client';
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaImage } from "react-icons/fa";
// import { useState } from "react";
// import { db } from "@/config/firebase";
// import { collection, addDoc, Timestamp } from "firebase/firestore";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import ContactSection from "../components/about/Map";
// import toast from "react-hot-toast";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     businessName: "",
//     website: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const validate = () => {
//     let tempErrors = {};

//     if (!formData.name.trim()) tempErrors.name = "Name is required.";
//     if (!formData.email.trim()) {
//       tempErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       tempErrors.email = "Invalid email format.";
//     }
//     if (!formData.phone.trim()) {
//       tempErrors.phone = "Phone number is required.";
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       tempErrors.phone = "Phone must be 10 digits.";
//     }
//     if (!formData.message.trim()) tempErrors.message = "Message is required.";

//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const messageHandler = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     try {
//       await addDoc(collection(db, "contacts"), {
//         ...formData,
//         createdAt: Timestamp.now(),
//       });
//       toast.success("Message sent successfully!");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         businessName: "",
//         website: "",
//         message: "",
//       });
//       setErrors({});
//     } catch (error) {
//       console.error("Error sending message: ", error);
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <ContactSection />

//       <section className="bg-white text-black py-16 px-6">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
//           {/* Left Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
//             <p className="text-gray-700 mb-8">
//               We’d love to hear from you! Whether it’s booking an appointment,
//               asking a question, or giving feedback — we’re here to help.
//             </p>

//             <div className="space-y-5">
//               <div className="flex items-center space-x-4">
//                 <FaPhone className="text-black text-xl" />
//                 <span className="text-lg">+91 98765 43210</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <FaEnvelope className="text-black text-xl" />
//                 <span className="text-lg">info@lokaci.com</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <FaMapMarkerAlt className="text-black text-xl" />
//                 <span className="text-lg">Lokaci H.Q., Sector 117, Noida, India</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <FaClock className="text-black text-xl" />
//                 <span className="text-lg">Mon - Sun: 9:00 AM - 8:00 PM</span>
//               </div>
//             </div>

//             <div className="flex items-center w-full mt-5">
//               <Link href="/" className="h-12 my-4">
//                 <div className="relative w-full h-full">
//                   <FaImage className="text-8xl" />
//                 </div>
//               </Link>
//             </div>
//           </motion.div>

//           {/* Right Form */}
//           <motion.div
//             className="bg-white text-black rounded-lg shadow-lg p-8"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
//             <form className="space-y-6" onSubmit={messageHandler}>
//               {/* Personal Info */}
//               <div>
//                 <h4 className="text-lg font-semibold mb-3">Personal Info</h4>
//                 <div className="space-y-4">
//                   <div>
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                     />
//                     {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//                   </div>

//                   <div>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                     />
//                     {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//                   </div>

//                   <div>
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Phone Number"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                     />
//                     {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//                   </div>
//                 </div>
//               </div>

//               {/* Business Info */}
//               <div>
//                 <h4 className="text-lg font-semibold mb-3">Business Info</h4>
//                 <div className="space-y-4">
//                   <input
//                     type="text"
//                     name="businessName"
//                     placeholder="Business Name"
//                     value={formData.businessName}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                   />
//                   <input
//                     type="text"
//                     name="website"
//                     placeholder="Website (optional)"
//                     value={formData.website}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                   />
//                 </div>
//               </div>

//               {/* Other Details */}
//               <div>
//                 <h4 className="text-lg font-semibold mb-3">Other Details</h4>
//                 <div>
//                   <textarea
//                     name="message"
//                     placeholder="Your Message"
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                   ></textarea>
//                   {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gray-800 text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition duration-300"
//               >
//                 Send Message
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaBriefcase, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { db } from '@/config/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';
import ContactSection from '../components/about/Map';
import Header from '../components/Header';
import BonusAndFooter from '../components/Footer';
import ThankYouModal from '../components/other/ThankYouModal';
// import { FaBookReader } from "react-icons/fa";

export default function AdvancedMultiStepForm() {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  // const [isOpen, setIsOpen] = useState()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    country: '',
    state: '',
    businessName: '',
    website: '',
    education: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedServices = checked
        ? [...formData.services, value]
        : formData.services.filter((s) => s !== value);
      setFormData({ ...formData, services: updatedServices });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setErrors({ ...errors, [name]: '' });
  };

  const validateStep = () => {
    let tempErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) tempErrors.name = 'Name is required.';
      if (!formData.email.trim()) tempErrors.email = 'Email is required.';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Invalid email format.';
      if (!formData.phone.trim()) tempErrors.phone = 'Phone is required.';
      if (!formData.dob.trim()) tempErrors.dob = 'Date of birth is required.';
      if (!formData.country.trim()) tempErrors.country = 'Country is required.';
      if (!formData.state.trim()) tempErrors.state = 'State is required.';
    }
    if (step === 2) {
      if (!formData.businessName.trim()) tempErrors.businessName = 'Business name is required.';
      if (!formData.education.trim()) tempErrors.education = 'Education is required.';
    }
    if (step === 3) {
      if (!formData.message.trim()) tempErrors.message = 'Message is required.';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      toast.success('Message sent successfully!');
      setFormData({
        name: '', email: '', phone: '', dob: '', country: '', state: '',
        businessName: '', website: '', education: '',
        message: '',
      });
      setStep(1);
      setShowModal(true);
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  };

  const steps = [
    { id: 1, label: 'Personal', icon: <FaUser /> },
    { id: 2, label: 'Professional', icon: <FaBriefcase /> },
    { id: 3, label: 'Message', icon: <FaEnvelope /> },
  ];

  // const servicesOptions = [
  //   'Haircut', 'Hair Coloring', 'Makeup', 'Manicure & Pedicure', 'Massage', 'Facial'
  // ];

  return (
    <>
    {/* Include modal component */}
    <ThankYouModal isOpen={showModal} onClose={() => setShowModal(false)} />

    <Header/>
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-8 space-y-6 my-20">
    <ContactSection/>
      {/* Progress / Checkpoints */}
      <div className="flex items-center justify-between mb-6 relative">
        {steps.map((s, i) => (
          <div key={s.id} className="flex-1 relative">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 
                ${step > s.id ? 'bg-green-500 border-green-500 text-white' : step === s.id ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-400'}`}
              >
                {step > s.id ? <FaCheckCircle /> : s.icon}
              </div>
              <span className={`mt-2 text-sm ${step >= s.id ? 'font-bold text-gray-800' : 'text-gray-400'}`}>
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`absolute top-5 left-1/2 w-full h-1 bg-gray-300 -z-10`}>
                <div
                  className={`h-1 bg-green-500`}
                  style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Step 1: Personal */}
        {step === 1 && (
          <motion.div key="step1" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }} className="space-y-4">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}

            <select name="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}

            <select name="state" value={formData.state} onChange={handleChange} className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select State</option>
              <option value="Delhi">Delhi</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Noida">Noida</option>
            </select>
            {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
          </motion.div>
        )}

        {/* Step 2: Professional */}
        {step === 2 && (
          <motion.div key="step2" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }} className="space-y-4">
            <input type="text" name="businessName" placeholder="Business Name" value={formData.businessName} onChange={handleChange} className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName}</p>}

            <input type="text" name="website" placeholder="Website (optional)" value={formData.website} onChange={handleChange} className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <input type="text" name="education" placeholder="Enter your education" value={formData.education} onChange={handleChange} className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.education && <p className="text-red-500 text-sm">{errors.education}</p>}
          </motion.div>
        )}

        {/* Step 3: Message */}
        {step === 3 && (
          <motion.div key="step3" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }} className="space-y-4">
            <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            {/* <div className="space-y-2">
              <p className="font-semibold">Interested Services:</p>
              {servicesOptions.map((service) => (
                <label key={service} className="inline-flex items-center space-x-2">
                  <input type="checkbox" value={service} checked={formData.services.includes(service)} onChange={handleChange} className="form-checkbox h-5 w-5 text-blue-600" />
                  <span>{service}</span>
                </label>
              ))}
            </div>
            {errors.services && <p className="text-red-500 text-sm">{errors.services}</p>} */}
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          {step > 1 && <button type="button" onClick={prevStep} className="px-6 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition">Back</button>}
          {step < steps.length ? (
            <button type="button" onClick={nextStep} className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Next</button>
          ) : (
            <button type="submit" className="ml-auto px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">Submit</button>
          )}
        </div>
      </form>
    </div>
    <BonusAndFooter/>
    </>
  );
}


