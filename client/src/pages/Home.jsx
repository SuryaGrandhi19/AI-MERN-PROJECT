import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Navbar from "../components/Navbar/Navbar";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";


function Home() {
    return(
        <>
        <Navbar/>
        <Hero/>          
        <Features/>
        <HowItWorks/>
        <WhyChooseUs/>
        <About/>
        <Contact/>
        </>

    );
}

export default Home;