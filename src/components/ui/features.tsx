export default function FeaturesSection() {
    return (
        <section className="py-16 bg-[#030303] text-zinc-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                   <div className="card-wrapper">

                   <div className="flex flex-col items-center text-center bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>

                        </div>
                        <h3 className="text-xl font-semibold mb-2">Store Information</h3>
                        <p className="text-sm text-gray-400">
                            Securely store your valuable information and thoughts for future use.
                        </p>
                    </div>
                   </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center text-center bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-12 h-12 text-pink-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Organize Thoughts</h3>
                        <p className="text-sm text-gray-400">
                            Keep your ideas and thoughts organized in one place for easy access.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center text-center bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-12 h-12 text-green-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12l2 2 4-4m5 4.5V6a2.5 2.5 0 00-2.5-2.5h-11A2.5 2.5 0 004 6v12a2.5 2.5 0 002.5 2.5h11a2.5 2.5 0 002.5-2.5z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Access Anywhere</h3>
                        <p className="text-sm text-gray-400">
                            Access your saved information anytime, anywhere, on any device.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}