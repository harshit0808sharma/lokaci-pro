
import Bonus from "./components/Bonus";
import CoreBenefits from "./components/CoreBenefits";
import CTASection from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import ProblemPromise from "./components/ProblePromise";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <ProblemPromise/>
        <CoreBenefits/>
        <HowItWorks/>
        <Pricing/>
        <Testimonials/>
        <CTASection/>
        <FAQ/>
        <Bonus/>
        <Footer/>
      </div>
    </>
  );
}
