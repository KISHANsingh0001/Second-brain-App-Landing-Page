import AboutUs from "@/components/ui/AboutUs";
import AnimatedBeam from "@/components/ui/animated-beam";
import IconMarquee from "@/components/ui/cta";
import FeaturesSection from "@/components/ui/features";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navBar";
import HeroGeometric from "@/components/ui/shape-landing-hero";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Second Brain - Organize Your Digital Life | Personal Knowledge Hub',
  description: 'Build your digital second brain. Organize YouTube videos, tweets, and links in one powerful dashboard. Smart categorization, secure sharing, and seamless access across devices.',
  openGraph: {
    title: 'Second Brain - Organize Your Digital Life',
    description: 'Build your digital second brain. Organize YouTube videos, tweets, and links in one powerful dashboard.',
    images: ['/brain.png'],
  },
};

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
