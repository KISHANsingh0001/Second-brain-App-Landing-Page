import HeroGeometric from "@/components/ui/shape-landing-hero";
export const runtime = "edge";

export default function Home() {
  return <div className="">
    {/* <HeroSectionDemo/> */}
    <HeroGeometric/>
    
        {/* Footer Section */}
        <footer className="bg-zinc-950 text-zinc-50 py-8 border-t border-zinc-800">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-zinc-50 hover:text-zinc-400">
                Privacy Policy
              </a>
              <a href="#" className="text-zinc-50 hover:text-zinc-400">
                Terms of Service
              </a>
              <a href="#" className="text-zinc-50 hover:text-zinc-400">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
  </div>
}
