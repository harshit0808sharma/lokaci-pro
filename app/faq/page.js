'use client'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";
import Hero from "../components/other/Hero";
import FAQ from "../components/FAQ";
import toast from "react-hot-toast";
import { useState } from "react";

export default function FaqPage() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setError("Email is required");
        } else if (!emailRegex.test(email)) {
            setError("Please enter a valid email");
        } else {
            setError("");
            console.log("Subscribed with:", email);
            toast.success("Thank you for subscribing!");
        }
        setEmail("")
    };


    return (
        <>
            <Header />
            {/* Hero Section */}
            <Hero heading={"Frequently Asked"} hightlight={"Questions"} paragraph={"Find answers to the most common questions about our services, bookings, and policies."} />

            {/* FAQ Section */}
            <FAQ />

            {/* contact support */}
            <section className="bg-gray-100 text-black py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
                    <p className="mb-6 max-w-xl mx-auto">
                        {"If you can’t find what you’re looking for, our team is here to help! Reach out anytime and we’ll get back to you as soon as possible."}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-yellow-600 transition"
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
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className={`rounded-full border px-4 py-3 focus:outline-none focus:ring-2 flex-grow ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-yellow-600"
                                }`}
                            aria-label="Email address"
                        />

                        <button
                            type="submit"
                            className="bg-yellow-500 text-white rounded-full px-6 py-3 font-semibold hover:bg-yellow-600 transition"
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
