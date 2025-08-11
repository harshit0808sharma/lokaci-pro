import Link from 'next/link';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';

const trustPoints = [
  "Zero setup fees – We handle everything",
  "24-hour onboarding – Start earning immediately",
  "30-day money-back guarantee – Risk-free trial",
  "Free data migration – Keep all your existing customer data",
  "24/7 support – We're here when you need us",
];

const CTASection = () => {
  return (
    <section className="bg-black text-white w-full py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join 3,000+ Salon Owners Who Chose Growth Over Chaos
        </h2>
        <p className="text-lg mb-8">
          Start your free demo today and see your first results tomorrow
        </p>

        {/* Primary CTA */}
        <Link
          href="/"
          className="inline-block bg-white text-indigo-700 font-semibold text-lg px-8 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Start My Free Demo – See Results in 24 Hours
        </Link>

        {/* Secondary CTA */}
        <div className="mt-4 text-sm flex items-center justify-center gap-2">
          <FaPhone />
          <span>Call Our Salon Expert: +91-XXXXX-XXXXX</span>
        </div>

        {/* Trust Points */}
        <div className="mt-10 text-left text-white grid gap-3">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-2">
              <FaCheckCircle className="text-green-300 mt-1" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Urgency Element */}
        <div className="mt-8 bg-yellow-100 text-yellow-800 p-4 rounded-md text-center font-medium shadow-sm">
          ⏰ Special Launch Pricing: Save ₹2,000 — expires in 5 days
        </div>
      </div>
    </section>
  );
};

export default CTASection;
