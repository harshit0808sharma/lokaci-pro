'use client';
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";

export default function FreeDemoPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col gap-5">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-400 text-white py-24">
        <motion.div
          className="max-w-5xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6">
            Try Our Free Demo Session!
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-8">
            {"Experience the magic of Glamour Salon firsthand — absolutely free. Book your free demo appointment today and see why we’re the best."}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-pink-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 hover:text-gray-900 transition"
            onClick={() => setShowForm(true)}
          >
            Book Free Demo
          </motion.button>
        </motion.div>
      </section>

      <section className="p-8 bg-gray-100 max-w-3xl mx-auto rounded shadow">
        <AnimatePresence>
          {showForm && (
            <motion.form
              className="mt-6 space-y-6 bg-white p-8 rounded shadow"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted!");
                setShowForm(false); 
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">Book Your Free Demo</h3>

              {/* Personal Information */}
              <div>
                <h4 className="font-semibold mb-2">Personal Information</h4>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  className="w-full p-3 border rounded mb-3"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full p-3 border rounded mb-3"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded"
                />
              </div>

              {/* Professional Information */}
              <div>
                <h4 className="font-semibold mb-2">Professional Information</h4>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="w-full p-3 border rounded mb-3"
                />
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title"
                  className="w-full p-3 border rounded mb-3"
                />
                <select
                  name="industry"
                  className="w-full p-3 border rounded"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select Industry
                  </option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Education</option>
                  <option>Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600"
              >
                Submit
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </main>
  );
}
