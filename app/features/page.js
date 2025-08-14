'use client'
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhyChooseUs from '../components/features/WhyChoseUs';
import TechnologyProducts from '../components/features/Tech&Pro';
import CallToAction from '../components/features/CallToAction';
import CoreBenefits from '../components/CoreBenefits';
import Pricing from '../components/Pricing';
import Hero from '../components/other/Hero';

const Features = () => {
    return (
        <>
            {/* Header */}
            <Header />

            {/* Features Hero Section */}
            <Hero heading={"Discover the Unique Features of"} hightlight={"Glamour Salon"} paragraph={"From luxurious treatments to expert stylists — see what makes us the go-to beauty destination."}/>

            {/* Features Choose Us Section */}
            <WhyChooseUs/>

            {/* Features Technology and Product */}
            <TechnologyProducts/>
            
            <CoreBenefits/>

            {/* <MembershipPlans/> */}
            <Pricing/>

            {/* calltoaction */}
            {/* <CallToAction/> */}

            {/* footer */}
            <Footer />
        </>
    );
};

export default Features;
