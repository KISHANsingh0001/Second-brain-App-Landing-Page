
import Logo from "@/icons/Logo";
import Image from "next/image";
import { BsDiscord, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className="mt-40 border-t border-zinc-800">
             <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
               <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
                 <div className="mb-12 flex-col flex gap-4">
                   <a className="flex items-center gap-2" href="/">
                     <div><Logo/></div>
                     <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                       Second Brain
                     </span>
                   </a>
                   <p className="max-w-xs text-white">Your Personal Knowledge Hub</p>
                 </div>
                 <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
                   <div>
                     
                     <ul className="gap-2 grid">
                       <li>
                         <a
                           className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                           href="/"
                         >
                           Email Collection
                         </a>
                       </li>
                       <li>
                         <a
                           className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                           href="/pricing"
                         >
                           Pricing
                         </a>
                       </li>
                       <li>
                         <a
                           className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                           href="/faq"
                         >
                           FAQ
                         </a>
                       </li>
                     </ul>
                   </div>
                   <div>
                    
                     <ul className="gap-2 grid">
                       <li>
                         <a
                           className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                           href="/"
                         >
                           Discord
                         </a>
                       </li>
                       <li>
                         <a
                           className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                           href="/"
                         >
                          
                           Twitter
                         </a>
                       </li>
                       <li>
                         <a
                           className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                           href="mailto:hello@chatcollect.com"
                         >
                           Email
                         </a>
                       </li>
                     </ul>
                   </div>
                   <div>
                     
                     <ul className="gap-2 grid">
                       <li>
                         <a
                           className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                           href="/terms"
                         >
                           Terms
                         </a>
                       </li>
                       <li>
                         <a
                           className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                           href="/privacy"
                         >
                           Privacy
                         </a>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
               <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md border-neutral-700/20 py-4 px-8 gap-2">
                 <div className="flex space-x-5 sm:justify-center sm:mt-0">
                   <a
                     className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
                     href=""
                   >
                     <BsDiscord size={30}/>
                     <span className="sr-only">Discord</span>
                   </a>
                   <a
                     className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
                     href=""
                   >
                   <BsTwitter size={30}/>
                     <span className="sr-only">Twitter</span>
                   </a>
                 </div>
                 <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                   Copyright © 2025{" "}
                   <a className="cursor-pointer" href="/">
                     Second Brain
                   </a>
                   . All Rights Reserved.
                 </span>
               </div>
             </div>
           </footer>
    </>
  );
}
