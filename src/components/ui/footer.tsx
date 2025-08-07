
// import Logo from "@/icons/Logo";
// import Image from "next/image";
// import { BsDiscord, BsTwitter } from "react-icons/bs";

// export default function Footer() {
//   return (
//     <>
//       <footer className="mt-40 border-t border-zinc-800">
//              <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
//                <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
//                  <div className="mb-12 flex-col flex gap-4">
//                    <a className="flex items-center gap-2" href="/">
//                      <div><Logo/></div>
//                      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
//                        Second Brain
//                      </span>
//                    </a>
//                    <p className="max-w-xs text-white">Your Personal Knowledge Hub</p>
//                  </div>
//                  <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
//                    <div>
                     
//                      <ul className="gap-2 grid">
//                        <li>
//                          <a
//                            className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
//                            href="/"
//                          >
//                            Email Collection
//                          </a>
//                        </li>
//                        <li>
//                          <a
//                            className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
//                            href="/pricing"
//                          >
//                            Pricing
//                          </a>
//                        </li>
//                        <li>
//                          <a
//                            className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
//                            href="/faq"
//                          >
//                            FAQ
//                          </a>
//                        </li>
//                      </ul>
//                    </div>
//                    <div>
                    
//                      <ul className="gap-2 grid">
//                        <li>
//                          <a
//                            className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
//                            href="/"
//                          >
//                            Discord
//                          </a>
//                        </li>
//                        <li>
//                          <a
//                            className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
//                            href="/"
//                          >
                          
//                            Twitter
//                          </a>
//                        </li>
//                        <li>
//                          <a
//                            className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
//                            href="mailto:hello@chatcollect.com"
//                          >
//                            Email
//                          </a>
//                        </li>
//                      </ul>
//                    </div>
//                    <div>
                     
//                      <ul className="gap-2 grid">
//                        <li>
//                          <a
//                            className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
//                            href="/terms"
//                          >
//                            Terms
//                          </a>
//                        </li>
//                        <li>
//                          <a
//                            className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
//                            href="/privacy"
//                          >
//                            Privacy
//                          </a>
//                        </li>
//                      </ul>
//                    </div>
//                  </div>
//                </div>
//                <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md border-neutral-700/20 py-4 px-8 gap-2">
//                  <div className="flex space-x-5 sm:justify-center sm:mt-0">
//                    <a
//                      className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
//                      href=""
//                    >
//                      <BsDiscord size={30}/>
//                      <span className="sr-only">Discord</span>
//                    </a>
//                    <a
//                      className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
//                      href=""
//                    >
//                    <BsTwitter size={30}/>
//                      <span className="sr-only">Twitter</span>
//                    </a>
//                  </div>
//                  <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
//                    Copyright © 2025{" "}
//                    <a className="cursor-pointer" href="/">
//                      Second Brain
//                    </a>
//                    . All Rights Reserved.
//                  </span>
//                </div>
//              </div>
//            </footer>
//     </>
//   );
// }
import Logo from "@/icons/Logo";
import Image from "next/image";
import { BsDiscord, BsTwitter, BsLinkedin, BsXCircle, BsTwitterX, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className="mt-40 bg-gradient-to-b from-black to-zinc-900 border-t border-zinc-800">
        <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
          <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-8">
            {/* Brand Section */}
            <div className="mb-12 flex-col flex gap-6 max-w-md">
              <a className="flex items-center gap-3" href="/">
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <Logo/>
                </div>
                <span className="self-center text-3xl font-bold whitespace-nowrap text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Second Brain
                </span>
              </a>
              <p className="text-gray-300 text-lg font-medium leading-relaxed">
                Your Personal Knowledge Hub
              </p>
              <p className="text-gray-400 text-sm">
               Organize And Share your thoughts, ideas, and information in one place. Accessible from anywhere, at any time.
              </p>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
                  Product
                </h3>
                <ul className="gap-3 grid">
                  <li>
                    <a
                      className="cursor-pointer text-gray-400 hover:text-white duration-300 font-medium text-sm transition-colors"
                      href="/"
                    >
                      Email Collection
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer text-gray-400 hover:text-white duration-300 font-medium text-sm transition-colors"
                      href="/pricing"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer text-gray-400 hover:text-white duration-300 font-medium text-sm transition-colors"
                      href="/faq"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
                  Community
                </h3>
                <ul className="gap-3 grid">
                  <li>
                    <a
                      className="cursor-pointer text-gray-400 hover:text-white duration-300 font-medium text-sm transition-colors"
                      href="https://discord.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Discord
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer text-gray-400 hover:text-white duration-300 font-medium text-sm transition-colors"
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer text-gray-400 hover:text-white duration-300 font-medium text-sm transition-colors"
                      href="mailto:hello@secondbrain.com"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
                  Legal
                </h3>
                <ul className="gap-3 grid">
                  <li>
                    <a
                      className="cursor-pointer text-gray-400 hover:text-white duration-300 font-medium text-sm transition-colors"
                      href="/terms"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer text-gray-400 hover:text-white duration-300 font-medium text-sm transition-colors"
                      href="/privacy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className=" ">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 px-8 gap-4">
              {/* Social Links */}
              <div className="flex space-x-6 sm:justify-center sm:mt-0">
                <a
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  href="#"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                >
                  <BsDiscord size={24}/>
                </a>
                <a
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                  href="https://x.com/KishanS36200218"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <BsTwitterX size={24}/>
                </a>
                <a
                  className="text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
                  href="https://www.linkedin.com/in/kishan-singh-thakur-26b912255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <BsLinkedin size={24}/>
                </a>
                <a
                  className="text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
                  href="https://github.com/KISHANsingh0001"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <BsGithub size={24}/>
                </a>
              </div>

              {/* Copyright and Creator */}
              <div className="text-center sm:text-right">
                <div className="text-sm text-gray-400 mb-1">
                  Copyright © 2025{" "}
                  <a className="text-white hover:text-gray-300 transition-colors duration-200 font-medium" href="/">
                    Second Brain
                  </a>
                  . All Rights Reserved.
                </div>
                <div className="text-xs text-gray-500">
                  Created with ❤️ by{" "}
                  <span className="text-gray-300 font-medium">
                    Kishan Singh Thakur
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}