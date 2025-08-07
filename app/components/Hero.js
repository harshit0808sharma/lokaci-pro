import Link from "next/link";
import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-4 md:px-8">
      <div className="max-w-4xl text-center flex flex-col gap-6 py-12">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Stop Losing Money to Salon Chaos
        </h1>

        {/* Subheading */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">
          The only salon management platform that actually increases your revenue while cutting your workload in half. Trusted by 3,000+ salons across India.
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          From missed appointments to manual billing nightmares — we've solved every problem that's costing you customers and sleep.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2  cursor-pointer">
            <FaCheckCircle className="text-white" />
            Get My Salon Organized – ₹7,000/Year
          </button>
          <Link href="/video" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2  cursor-pointer">
            <FaPlayCircle className="text-blue-600" />
            Watch 2-Min Demo
          </Link>
        </div>

        {/* Trust indicator */}
        <div className="text-sm text-gray-500 mt-2 flex items-center justify-center gap-2">
          <FaCheckCircle className="text-green-500" />
          Lokaci Pro pays for itself in the first month – 97% of our customers
        </div>
      </div>
    </section>
  );
};

export default Hero;
