import { useState } from "react";
export default function Header() {
    const navItems = ["About Us", "What to Expect", "Kids", "Resources", "Memory Verse", "Contact"];
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            {/* MOBILE SIDEBAR OVERLAY */}
            <div
                className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* MOBILE SIDEBAR */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white z-[101] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-6">
                    <button onClick={() => setMobileMenuOpen(false)} className="mb-8 text-gray-500 hover:text-black text-xl">
                        ✕
                    </button>
                    <nav className="flex flex-col gap-6">
                        {navItems.map((item) => (
                            <a key={item} href="#" className="text-xl font-medium hover:text-[#7bb0e0]" onClick={() => setMobileMenuOpen(false)}>
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
            <div className="md:hidden absolute top-4 left-4 z-[60] flex drop-shadow-md">
                {/* items-baseline aligns the bottom of the logo with the text baseline */}
                <div className="flex items-baseline gap-1">
                    <img
                        src={'/318Mobile.png'}
                        alt="3:18"
                        className="h-7 w-auto object-contain"
                    />
                    <p className="text-[#6EA1CE] font-avenir font-bold tracking-widest uppercase leading-none">
                        BIBLE CHURCH
                    </p>
                </div>
            </div>
            {/* HEADER - Physical "hidden md:block" removes the white bar on mobile */}
            <header className="fixed top-0 inset-x-0 z-50 bg-white shadow hidden md:block">

                <div className="mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-end gap-1">
                        <img src={'/ChurchLogo.png'} alt="Logo" className="h-16 sm:h-20 w-auto object-contain" />
                        <div className="flex items-end gap-2 mb-2 sm:mb-4">
                            <img src={'/318.png'} alt="3:18" className="h-7 w-auto object-contain" />
                            <img src={'/Bible Church.png'} alt="Bible Church" className="h-8 sm:h-5 w-auto object-contain" />
                        </div>
                    </div>

                    <nav className="flex gap-6 text-base lg:text-lg">
                        {navItems.map((item) => (
                            <a key={item} href="#" className="hover:text-[#7bb0e0] transition">{item}</a>
                        ))}
                    </nav>
                </div>
            </header>

            {/* MOBILE TRIGGER BUTTON - Made white so it shows up on the hero */}
            <button
                className="md:hidden fixed top-6 right-6 z-[60] p-2"
                onClick={() => setMobileMenuOpen(true)}
            >
                <div className="w-8 h-6 flex flex-col justify-between">
                    <span className="w-full h-1 bg-white shadow-sm"></span>
                    <span className="w-full h-1 bg-white shadow-sm"></span>
                    <span className="w-full h-1 bg-white shadow-sm"></span>
                </div>
            </button>
        </>
    )
}