'use client'
import Image from "next/image";

const Bonus = () => {
    return (
        <section className="bg-gray-100 py-16 px-4 sm:px-8 md:px-12 lg:px-20">
            {/* Video Section */}
            <div className="max-w-5xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    🎥 See the Power of Automation in Just 2 Minutes
                </h2>
                <p className="text-gray-600 mb-8">
                    Watch how real salon owners use Lokaci Pro to turn chaos into control — and double their revenue.
                </p>

                {/* Video Placeholder or Embed */}
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden shadow-md mx-auto max-w-3xl">
                    {/* Replace with iframe or embed once ready */}
                    {/* <Image
                        src=""
                        alt="Lokaci Pro Demo Video"
                        className="w-full h-full object-cover cursor-pointer"
                    /> */}
                </div>
            </div>

            {/* Final Urgency Banner */}
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-8 max-w-4xl mx-auto text-center shadow-md">
                <h3 className="text-2xl font-semibold text-rose-700 mb-2">
                    ⚡ Limited Time Launch Offer
                </h3>
                <p className="text-gray-700 text-lg mb-4">
                    Save ₹2,000 on your first year – <span className="font-semibold text-black">Only 47 Spots Left!</span>
                </p>

                <ul className="text-gray-600 text-sm mb-6 space-y-1">
                    <li>✅ 30-day money-back guarantee</li>
                    <li>✅ Start seeing results in 24 hours</li>
                    <li>✅ No setup fees</li>
                </ul>

                <a
                    href="#pricing"
                    className="inline-block bg-rose-600 text-white text-lg px-6 py-3 rounded-full hover:bg-rose-700 transition"
                >
                    🎯 Claim Your Discount Now
                </a>
            </div>
        </section>
    )
}

export default Bonus;
