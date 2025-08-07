'use client'
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";

const CoreBenefits = () => {
  const {benefits} = useContext(HomeContext)
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Why 3,000+ Salon Owners Choose Lokaci Pro Over Everything Else
        </h2>
        <p className="text-lg text-gray-700 font-medium mb-12">
          Each feature is designed to directly increase your revenue and reduce your stress
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreBenefits;
