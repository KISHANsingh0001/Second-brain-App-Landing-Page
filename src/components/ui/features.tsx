// export default function FeaturesSection() {
//     return (
//         <section className="py-16 bg-[#030303] text-zinc-50">
//             <div className="container mx-auto px-6 md:px-12 lg:px-20">
//                 <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {/* Feature 1 */}
//                    <div className="card-wrapper">

//                    <div className="flex flex-col items-center text-center bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                         <div className="mb-4">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
//                                 <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
//                             </svg>

//                         </div>
//                         <h3 className="text-xl font-semibold mb-2">Store Information</h3>
//                         <p className="text-sm text-gray-400">
//                             Securely store your valuable information and thoughts for future use.
//                         </p>
//                     </div>
//                    </div>

//                     {/* Feature 2 */}
//                     <div className="flex flex-col items-center text-center bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                         <div className="mb-4">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth={2}
//                                 stroke="currentColor"
//                                 className="w-12 h-12 text-pink-500"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M12 4.5v15m7.5-7.5h-15"
//                                 />
//                             </svg>
//                         </div>
//                         <h3 className="text-xl font-semibold mb-2">Organize Thoughts</h3>
//                         <p className="text-sm text-gray-400">
//                             Keep your ideas and thoughts organized in one place for easy access.
//                         </p>
//                     </div>

//                     {/* Feature 3 */}
//                     <div className="flex flex-col items-center text-center bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                         <div className="mb-4">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth={2}
//                                 stroke="currentColor"
//                                 className="w-12 h-12 text-green-500"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M9 12l2 2 4-4m5 4.5V6a2.5 2.5 0 00-2.5-2.5h-11A2.5 2.5 0 004 6v12a2.5 2.5 0 002.5 2.5h11a2.5 2.5 0 002.5-2.5z"
//                                 />
//                             </svg>
//                         </div>
//                         <h3 className="text-xl font-semibold mb-2">Access Anywhere</h3>
//                         <p className="text-sm text-gray-400">
//                             Access your saved information anytime, anywhere, on any device.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

export default function FeaturesSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-[#030303] via-[#0a0a0a] to-[#030303] text-zinc-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
                        Powerful Features
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Everything you need to build, organize, and share your second brain
                    </p>
                    <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-3xl border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 hover:transform hover:scale-105">
                            <div className="mb-6 relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">Secure Storage</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Safely store your valuable information, ideas, and thoughts 
                            </p>
                          
                        </div>
                    </div>

                    {/* Feature 2 - Organize Thoughts */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-3xl border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 hover:transform hover:scale-105">
                            <div className="mb-6 relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">Smart Organization</h3>
                            <p className="text-gray-400 leading-relaxed">
                                 Organization that automatically categorizes and connects your ideas for maximum productivity.
                            </p>
                           
                        </div>
                    </div>

                    {/* Feature 3 - Access Anywhere */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-3xl border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 hover:transform hover:scale-105">
                            <div className="mb-6 relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">Global Access</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Access your knowledge base from anywhere in the world, on any device.
                            </p>
                           
                        </div>
                    </div>
                </div>

                {/* Additional Features Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {/* Feature 4 - AI-Powered Search */}
                    {/* <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-3xl border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 hover:transform hover:scale-105">
                            <div className="mb-6 relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">Intelligent Search</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Find exactly what you need with AI-powered search that understands context and meaning, not just keywords.
                            </p>
                        </div>
                    </div> */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-3xl border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 hover:transform hover:scale-105">
                            <div className="mb-6 relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">Smart Categorization</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Organize your content with categorization system. Find information quickly through structured categories.
                            </p>
                            
                        </div>
                    </div>

                    {/* Feature 5 - Collaboration */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 rounded-3xl border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 hover:transform hover:scale-105">
                            <div className="mb-6 relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">Team Collaboration</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Share knowledge seamlessly with your team. Accessible from anywhere, at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}