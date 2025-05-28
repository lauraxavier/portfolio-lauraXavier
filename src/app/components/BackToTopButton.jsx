"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            setShowBackToTop(window.scrollY > 500);
        };

        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 z-50 p-3 rounded-full 
            bg-purple-600 text-white shadow-2xl shadow-purple-500/40 transition-all duration-300 
            hover:bg-purple-700 ${
                showBackToTop
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90 pointer-events-none"
            }`}
            aria-label="Voltar ao topo"
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
};

export default BackToTopButton;
