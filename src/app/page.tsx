import AboutUs from "@/components/ui/AboutUs";
import AnimatedBeam from "@/components/ui/animated-beam";
import IconMarquee from "@/components/ui/cta";
import Footer from "@/components/ui/footer";
import HeroGeometric from "@/components/ui/shape-landing-hero";



export default function Home() {
  return <div className="">
    {/* <HeroSectionDemo/> */}
   <div>
   <HeroGeometric/>
   <AnimatedBeam/>
    <IconMarquee/>
    <AboutUs/>
    {/* Footer Section */}
    <Footer/>
    </div>
   </div>

}
