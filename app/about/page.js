'use client'
import Image from "next/image";
import img from '../../public/assets/images/saloonImg1.jpg'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";

export default function AboutPage() {
    const { teamMembers } = useContext(HomeContext)
    return (
        <>
            <Header />
            <div className="bg-white text-gray-800">

                {/* Hero Section */}
                <section className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center">
                    <Image
                        src={img}
                        alt="Luxury Salon"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
                        <h1 className="text-3xl md:text-5xl font-bold mb-3">About Our Salon</h1>
                        <p className="max-w-2xl text-lg md:text-xl">
                            Experience beauty & relaxation like never before.
                        </p>
                    </div>
                </section>

                {/* About Text */}
                <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">Who We Are</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            At LuxeGlow Salon, we believe in enhancing your natural beauty through expert care and premium treatments.
                            From hair styling to skincare, our team ensures you get the best experience every time you visit.
                        </p>
                        <Link href="/appointmentbooking" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition">
                            Book an Appointment
                        </Link>
                    </div>
                    <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={img}
                            alt="Salon Interior"
                            fill
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* Stats */}
                <section className="bg-pink-50 py-12">
                    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-pink-500">5+</h3>
                            <p className="text-gray-600">Years of Service</p>
                        </div>
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-pink-500">5k+</h3>
                            <p className="text-gray-600">Happy Clients</p>
                        </div>
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-pink-500">15+</h3>
                            <p className="text-gray-600">Professional Stylists</p>
                        </div>
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-pink-500">100%</h3>
                            <p className="text-gray-600">Satisfaction</p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="max-w-6xl mx-auto py-12 px-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">Meet Our Experts</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map(member => (
                            <div key={member.id} className="text-center p-4 border rounded-lg shadow hover:shadow-lg transition">
                                {
                                    member.photo ? (
                                        <Image
                                            src={member.photo}
                                            alt={member.name}
                                            className="mx-auto rounded-full w-40 h-40 object-cover mb-4"
                                        />
                                    ) : (
                                        <CgProfile />
                                    )
                                }
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
                                <p className="text-gray-700 mb-3">{member.bio}</p>
                                <div className="flex justify-center space-x-4 text-indigo-600">
                                    <Link href={member.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</Link>
                                    <Link href={member.socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
