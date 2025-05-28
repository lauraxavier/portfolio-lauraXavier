"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeButton() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const StarryBackground = () => (
        <svg
            className="absolute inset-0 w-full h-full rounded-full"
            viewBox="0 0 80 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="80" height="32" rx="16" fill="#1E293B" />
            <circle cx="10" cy="8" r="1" fill="white" />
            <circle cx="20" cy="12" r="0.8" fill="white" />
            <circle cx="30" cy="5" r="1.2" fill="white" />
            <circle cx="40" cy="14" r="0.7" fill="white" />
            <circle cx="50" cy="10" r="1" fill="white" />
            <circle cx="60" cy="20" r="0.5" fill="white" />
            <circle cx="65" cy="25" r="0.8" fill="white" />
            <circle cx="70" cy="22" r="0.6" fill="white" />
            <circle cx="75" cy="27" r="1" fill="white" />
        </svg>
    );

    const CloudyBackground = () => (
        <svg
            className="absolute inset-0 w-full h-full rounded-full"
            viewBox="0 0 80 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="80" height="32" rx="16" fill="#60A5FA" />
            <ellipse cx="18" cy="18" rx="8" ry="5" fill="white" opacity="0.8" />
            <ellipse cx="30" cy="15" rx="6" ry="4" fill="white" opacity="0.7" />
            <ellipse
                cx="45"
                cy="18"
                rx="7"
                ry="5"
                fill="white"
                opacity="0.75"
            />
            <ellipse cx="60" cy="16" rx="5" ry="3" fill="white" opacity="0.7" />
        </svg>
    );

    return (
        <motion.button
            aria-label="Alternar tema claro e escuro"
            onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="relative flex items-center justify-center w-20 h-8 rounded-full
                 shadow-lg cursor-pointer focus:outline-none focus:ring-2 transition-colors duration-500"
        >
            {resolvedTheme === "dark" ? (
                <StarryBackground />
            ) : (
                <CloudyBackground />
            )}

            <motion.div
                className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md ${
                    resolvedTheme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                style={{
                    left:
                        resolvedTheme === "dark"
                            ? "calc(100% - 1.5rem - 4px)" // ajusta para novo tamanho
                            : "4px",
                }}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {resolvedTheme === "dark" ? (
                        <motion.div
                            key="moon"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center justify-center h-full w-full text-yellow-400"
                        >
                            <MoonIcon />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center justify-center h-full w-full text-yellow-500"
                        >
                            <SunIcon />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.button>
    );
}
