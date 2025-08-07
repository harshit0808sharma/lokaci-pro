'use client'
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useContext } from 'react';
import { HomeContext } from '../context/HomeContext';

const Testimonials = () => {
  const { testimonials } = useContext(HomeContext);
  return (
    <section className="bg-gray-100 w-full py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          Real Salon Owners, Real Results
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 text-left">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
              <FaQuoteLeft className="text-indigo-600 text-2xl mb-4" />
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-sm" />
                ))}
              </div>
              <p className="text-gray-800 mb-4 italic">"{t.review}"</p>
              <p className="font-semibold text-black">{t.name}</p>
              <p className="text-sm text-gray-600">{t.salon}</p>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="mt-12">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">
            Join 3,000+ Happy Salons
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
