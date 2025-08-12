export default function MembershipPlans() {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      features: [
        "Haircut & Styling",
        "Basic Facial",
        "Manicure & Pedicure",
        "Free Consultation",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "₹1999",
      features: [
        "Advanced Hair Treatment",
        "Deep Facial Care",
        "Nail Art & Spa",
        "Priority Booking",
        "Complimentary Gift",
      ],
      popular: true,
    },
    {
      name: "VIP",
      price: "₹2999",
      features: [
        "All Premium Benefits",
        "Personal Stylist",
        "Makeup Sessions",
        "Spa & Massage",
        "Exclusive Discounts",
      ],
      popular: false,
    },
  ];

  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Membership Plans
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg p-8 flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl
                ${
                  plan.popular
                    ? "border-4 border-pink-500 z-10"
                    : "border border-transparent"
                }
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 px-4 py-1 bg-pink-500 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {plan.name}
              </h3>

              <p className="text-5xl font-bold text-pink-500 mb-6">
                {plan.price}
                <span className="text-lg font-normal text-gray-500">/month</span>
              </p>

              <ul className="mb-8 space-y-3 text-gray-600 text-left w-full max-w-xs">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-auto px-6 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
