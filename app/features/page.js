'use client'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useContext } from 'react';
import { HomeContext } from '../context/HomeContext';
import { motion } from 'framer-motion';
import FeaturesHero from '../components/features/Hero';
import WhyChooseUs from '../components/features/WhyChoseUs';
import TechnologyProducts from '../components/features/Tech&Pro';
import MembershipPlans from '../components/features/Membership&Plan';
import CallToAction from '../components/features/CallToAction';

const Features = () => {
    const { benefits } = useContext(HomeContext);
    return (
        <>
            {/* Header */}
            <Header />

            {/* Features Hero Section */}
            <FeaturesHero/>

            {/* Features Choose Us Section */}
            <WhyChooseUs/>

            {/* Features Technology and Product */}
            <TechnologyProducts/>
            
            <section className="w-full bg-white py-16 px-6 my-20">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 max-w-6xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                        Why 3,000+ Salon Owners Choose Lokaci Pro Over Everything Else
                    </h2>
                    <p className="text-lg text-gray-700 font-medium mb-12">
                        Each feature is designed to directly increase your revenue and reduce your stress
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
                            >
                                <div className="text-3xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold text-black mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-700 text-sm">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
            <MembershipPlans/>
            <CallToAction/>
            <Footer />
        </>
    );
};

export default Features;
