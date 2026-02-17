import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "About Us", path: "/about" },
        { name: "What to Expect", path: "/expect" },
        { name: "Kids", path: "/expect" },
        { name: "Resources", path: "/resources" },
        { name: "Memory Verse", path: "/" },
        { name: "Contact", path: "/expect" },
    ];

    const handleNavigation = (item: { name: string; path: string }) => {
        if (item.name === "Memory Verse") {
            if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                    document
                        .getElementById("memory-verse")
                        ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
            } else {
                document
                    .getElementById("memory-verse")
                    ?.scrollIntoView({ behavior: "smooth" });
            }
        } else if (item.name === "Contact") {
            if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                    document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
            } else {
                document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
            }

        } else {
            navigate(item.path);
        }

        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* MOBILE OVERLAY */}
            <div
                className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 lg:hidden ${mobileMenuOpen
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* MOBILE SIDEBAR */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white z-[101] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6">
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="mb-8 text-gray-500 hover:text-black text-xl"
                    >
                        ✕
                    </button>

                    <nav className="flex flex-col gap-6">
                        {navItems.map((item) => (
                            <p
                                key={item.name}
                                onClick={() => handleNavigation(item)}
                                className="text-xl font-medium hover:text-[#7bb0e0] cursor-pointer"
                            >
                                {item.name}
                            </p>
                        ))}
                    </nav>
                </div>
            </div>

            {/* DESKTOP HEADER */}
            <header className="fixed top-0 inset-x-0 z-50 bg-white shadow hidden lg:block">
                <div className="mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-end gap-1 cursor-pointer" onClick={() => navigate('/')}>
                        <img src={'/ChurchLogo.png'} alt="Logo" className="h-16 sm:h-20 w-auto object-contain" />
                        <div className="flex items-end gap-2 mb-2 sm:mb-4">
                            <img src={'/318.png'} alt="3:18" className="h-7 w-auto object-contain" />
                            <img src={'/Bible Church.png'} alt="Bible Church" className="h-8 sm:h-5 w-auto object-contain" />
                        </div>
                    </div>

                    <nav className="flex gap-6 text-base lg:text-lg">
                        {navItems.map((item) => (
                            <p
                                key={item.name}
                                onClick={() => handleNavigation(item)}
                                className="hover:text-[#7bb0e0] transition cursor-pointer"
                            >
                                {item.name}
                            </p>
                        ))}
                    </nav>
                </div>
            </header>

            {/* MOBILE HAMBURGER */}
            <button
                className="lg:hidden fixed top-6 right-6 z-[60] p-2"
                onClick={() => setMobileMenuOpen(true)}
            >
                <div className="w-8 h-6 flex flex-col justify-between">
                    <span className="w-full h-1 bg-white shadow-sm"></span>
                    <span className="w-full h-1 bg-white shadow-sm"></span>
                    <span className="w-full h-1 bg-white shadow-sm"></span>
                </div>
            </button>
        </>
    );
}
