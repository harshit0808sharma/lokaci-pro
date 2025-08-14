'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaImage } from "react-icons/fa";
import { useState } from "react";
import { db } from "@/config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/about/Map";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    website: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone must be 10 digits.";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const messageHandler = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        website: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error sending message: ", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <Header />
      <ContactSection />

      <section className="bg-white text-black py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Info */}
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
                  <FaImage className="text-8xl" />
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
            <form className="space-y-6" onSubmit={messageHandler}>
              {/* Personal Info */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Personal Info</h4>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Business Info */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Business Info</h4>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="businessName"
                    placeholder="Business Name"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                  <input
                    type="text"
                    name="website"
                    placeholder="Website (optional)"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
              </div>

              {/* Other Details */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Other Details</h4>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition duration-300"
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
