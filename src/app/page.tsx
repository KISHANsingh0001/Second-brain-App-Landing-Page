import AboutUs from "@/components/ui/AboutUs";
import AnimatedBeam from "@/components/ui/animated-beam";
import IconMarquee from "@/components/ui/cta";
import FeaturesSection from "@/components/ui/features";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navBar";
import HeroGeometric from "@/components/ui/shape-landing-hero";


{/* <HeroSectionDemo/> */}

export default function Home() {
  return <div className="w-screen h-screen overflow-x-hidden">
    <Navbar/>
   <HeroGeometric/>
   <AnimatedBeam/>
    <IconMarquee/>
    <FeaturesSection/>
    <AboutUs/>
    {/* Footer Section */}
    <Footer/>
    </div>
   

}
