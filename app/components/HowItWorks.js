'use client'
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";

const HowItWorks = () => {
  const { steps } = useContext(HomeContext);
  return (
    <section className="bg-gray-50 w-full py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
          From Chaos to Cash Flow in 3 Simple Steps
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                {step.icon}
                <h3 className="text-xl font-semibold text-black">
                  {step.title}
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                {step.points.map((point, i) => (
                  <li key={i}>
                    {point.startsWith("*") && point.endsWith("*") ? (
                      <em className="block text-sm text-gray-600">{point.replace(/\*/g, "")}</em>
                    ) : (
                      "• " + point
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="mt-12">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">
            Try It Free – No Setup Cost
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
