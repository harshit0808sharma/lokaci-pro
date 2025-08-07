'use client'
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";

const PricingPlans = () => {
  const { plans } = useContext(HomeContext);
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing That Pays for Itself</h2>
        <p className="text-lg text-gray-700 italic mb-12">
         {"No contracts. No hidden fees. Cancel anytime. But you won't want to."}
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`border rounded-xl p-6 text-left shadow-sm cursor-pointer ${
                plan.highlight
                  ? "border-indigo-600 bg-indigo-50 shadow-md scale-105"
                  : "bg-gray-50"
              }`}
            >
              <div className="text-2xl font-bold mb-2">
                {plan.emoji} {plan.name}
              </div>
              <div className="text-xl font-semibold text-black">{plan.price}</div>
              <div className="text-sm text-gray-600 mb-4">({plan.monthly})</div>
              <p className="text-gray-700 font-medium mb-4">{plan.description}</p>

              <ul className="space-y-2 text-sm text-gray-800">
                {plan.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>

              <p className="mt-4 italic text-indigo-600">{plan.note}</p>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mt-16 max-w-3xl mx-auto text-left">
          <h3 className="text-xl font-semibold mb-2">💡 Add-Ons Available</h3>
          <ul className="list-disc pl-5 text-gray-800 space-y-1">
            <li>Extra WhatsApp Messages: ₹1,000 / 1000 messages</li>
            <li>White-labeled Customer App: ₹5,000/year</li>
            <li>Advanced Franchise Dashboard: ₹10,000/year</li>
          </ul>
        </div>

        {/* Launch Offer */}
        <div className="mt-10 bg-yellow-100 p-6 rounded-lg text-center">
          <h4 className="text-xl font-semibold text-yellow-900 mb-2">🎁 Launch Offer</h4>
          <p className="text-gray-800">
            Save ₹2,000 – Use code <span className="font-bold">SALON2025</span>
          </p>
          <p className="italic text-sm text-gray-600">*Limited time offer for the first 100 signups*</p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
