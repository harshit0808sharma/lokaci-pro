'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

const services = [
  "Haircut",
  "Hair Coloring",
  "Makeup",
  "Manicure & Pedicure",
  "Massage Therapy",
  "Facial Treatment",
];

export default function AppointmentBooking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const { name, email, phone, date, time, service } = formData;
    if (!name || !email || !phone || !date || !time || !service) {
      toast.error("Please fill all fields");
      return false;
    }
    // Basic email check
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email");
      return false;
    }
    // Basic phone check (10 digits)
    if (!/^\d{10}$/.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Appointment booked successfully!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
      });
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-700">
          Book Your Appointment
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>

          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit number"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
              maxLength={10}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                min={new Date().toISOString().split('T')[0]} // no past dates
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">
                Time
              </label>
              <input
                id="time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                min="09:00"
                max="20:00"
              />
            </div>

          </div>

          <div>
            <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
              Choose Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            >
              <option value="">Select a service</option>
              {services.map((srv, i) => (
                <option key={i} value={srv}>{srv}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md font-semibold text-white cursor-pointer ${
              loading ? "bg-gray-300 cursor-not-allowed" : "bg-gray-600 hover:bg-gray-700"
            } transition`}
          >
            {loading ? "Booking..." : "Book Appointment"}
          </button>
        </form>
      </div>
    </section>
  );
}
