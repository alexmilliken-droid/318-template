import Header from "./Header";

export default function Resources() {
    return (
        <>
            <Header />

            <div className="w-full overflow-x-hidden">

                {/* Hero Section */}
                <section className="relative h-[35vh] sm:h-[45vh] md:h-[55vh] min-h-[260px] w-full">
                    <img
                        src="/pexels-repuding-12064.jpg"
                        alt="Resources Hero"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />

                    <div className="absolute inset-0 flex items-end">
                        <div className="max-w-7xl mx-auto w-full px-6 pb-12 md:pb-20">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                                Resources
                            </h2>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 sm:py-20 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-16 md:gap-24">

                        {/* Podcast Card */}
                        <div className="bg-[#fef8f2] rounded-2xl shadow-lg overflow-hidden">
                            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-8 sm:p-10 lg:p-14">

                                {/* Image */}
                                <div className="w-full lg:w-1/2 max-w-sm sm:max-w-md lg:max-w-none mx-auto">
                                    <div className="relative w-full aspect-square">
                                        <img
                                            src="/Screenshot 2026-01-08 090658.png"
                                            alt="5 Minutes With The Doc Podcast Logo"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

                                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
                                        5 Minutes With The Doc
                                    </h1>

                                    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed">
                                        Be encouraged each day as one of our Elders guides you
                                        through the Bible, teaching and sharing insights from
                                        the Scriptures.
                                    </p>

                                    <a
                                        href="https://open.spotify.com/show/2NssxD9d4uYi5pkGtuDkL0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-[#485243] hover:bg-[#5a6451] transition-colors text-white font-semibold text-base sm:text-lg md:text-xl px-8 sm:px-10 py-3 sm:py-4 rounded-lg shadow-md"
                                    >
                                        Listen Now
                                    </a>

                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="mx-auto w-20 sm:w-28 h-[2px] bg-gray-200 rounded-full" />

                        {/* Sermons Card */}
                        <a
                            href="/sermons"
                            className="relative w-full group overflow-hidden rounded-2xl shadow-lg"
                        >
                            <img
                                src="/pexels-rdne-8674846.jpg"
                                alt="Sermons"
                                className="w-full h-[280px] sm:h-[380px] md:h-[480px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                                    Sermons
                                </h3>
                            </div>
                        </a>

                    </div>
                </section>

            </div>
        </>
    );
}
