import AboutUs from "@/components/ui/AboutUs";
import AnimatedBeam from "@/components/ui/animated-beam";
import IconMarquee from "@/components/ui/cta";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navBar";
import HeroGeometric from "@/components/ui/shape-landing-hero";



export default function Home() {
  return <div className="">
    {/* <HeroSectionDemo/> */}
   <div>
    <Navbar/>
   <HeroGeometric/>
   <AnimatedBeam/>
    <IconMarquee/>
    <AboutUs/>
    {/* Footer Section */}
    <Footer/>
    </div>
   </div>

}
