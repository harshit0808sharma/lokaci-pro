'use client'

import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HomeContext } from "../context/HomeContext";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import FAQ from "../components/FAQ";
import Pricing from "../components/Pricing";
import Hero from "../components/other/Hero";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/features/CallToAction";

export default function PricingPage() {
    const { testimonials } = useContext(HomeContext);

    return (
        <>
            <Header />
            {/* Hero Section */}
            <Hero heading={"Simple & Transparent"} hightlight={"Pricing Plans"} paragraph={"Choose the perfect plan to enjoy premium salon services without any hidden fees or contracts."}/>

            {/* Plans */}
            <Pricing/>

            {/* Testimonials */}
            <Testimonials/>

            {/* FAQ Section */}
            <FAQ/>

            {/* Contact Call-To-Action */}
            <CallToAction/>

            <Footer />
        </>
    );
}
