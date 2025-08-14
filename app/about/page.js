'use client'
import img from '../../public/assets/images/salonImg6.jpg';
import Footer from "../components/Footer";
import Header from "../components/Header";
import MeetTheTeam from "../components/about/Team";
import ClientTestimonials from "../components/about/Testimonials";
import AwardsAchievements from "../components/about/Achievement";
import SalonGallery from "../components/about/Gallery";
import OurValues from "../components/about/OurValues";
import ContactSection from "../components/about/Map";
import AboutHero from "../components/about/Hero";
import WhatWeOffer from "../components/about/WhatWeOffer";
import Stats from "../components/about/Stats";
import FAQ from "../components/FAQ";

export default function AboutPage() {
    return (
        <>
            <Header />
            <div className="bg-white text-gray-800">

                {/* Hero Section */}
                <AboutHero />

                {/* About Text */}
                <WhatWeOffer img={img} />

                {/* Stats */}
                <Stats />

                {/* Team Section */}
                <MeetTheTeam />

                {/* Testimonials */}
                <ClientTestimonials />

                {/* Award and Achievements */}
                <AwardsAchievements />

                {/* Gallery */}
                <SalonGallery />

                {/* Our values */}
                <OurValues />

                {/* Questions */}
                <FAQ/>

                {/* Contact Section */}
                <ContactSection />
            </div>
            <Footer />
        </>
    );
}
