'use client'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";
import Hero from "../components/other/Hero";
import FAQ from "../components/FAQ";

export default function FaqPage() {

    return (
        <>
            <Header />
            {/* Hero Section */}
            <Hero heading={"Frequently Asked"} hightlight={"Questions"} paragraph={"Find answers to the most common questions about our services, bookings, and policies."}/>

            {/* FAQ Section */}
            <FAQ/>

            {/* contact support */}
            <section className="bg-gray-100 text-black py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
                    <p className="mb-6 max-w-xl mx-auto">
                        {"If you can’t find what you’re looking for, our team is here to help! Reach out anytime and we’ll get back to you as soon as possible."}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-pink-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-pink-700 transition"
                        aria-label="Email Glamour Salon Support"
                    >
                        Contact Support
                    </Link>
                </div>
            </section>

            <section className="bg-white py-16 px-6 text-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
                    <p className="mb-6 max-w-xl mx-auto">
                        Subscribe to our newsletter for the latest salon tips, offers, and FAQs.
                    </p>
                    <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-600 flex-grow"
                            aria-label="Email address"
                        />
                        <button
                            type="submit"
                            className="bg-pink-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-pink-700 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>


            <Footer />
        </>
    );
}
