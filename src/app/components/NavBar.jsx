"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useTheme } from "next-themes";
import ThemeButton from "./ThemeButton";

const navLinks = [
    { title: "Sobre mim", path: "#about" },
    { title: "Projetos", path: "#projects" },
    { title: "Contato", path: "#contact" },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const variants = {
        initial: {
            backgroundColor: resolvedTheme === "dark" ? "#1e1e2f" : "#a586ed",
            boxShadow: "none",
        },
        scrolled: {
            backgroundColor:
                resolvedTheme === "dark"
                    ? "#121212cc"
                    : "rgba(176, 152, 235, 0.8)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            backdropFilter: "blur(6px)",
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.nav
            variants={variants}
            initial="initial"
            animate={scrolled ? "scrolled" : "initial"}
            className="fixed w-full z-50 top-0 left-0 backdrop-blur-md transition-all"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="text-3xl font-bold tracking-tight hover:scale-105 transition-transform font-orbitron"
                    style={{
                        color: resolvedTheme === "dark" ? "#d8b4fe" : "#3b0a45",
                    }}
                >
                    <div>{"<LX />"}</div>
                </Link>

                <div className="flex items-center gap-4">
                    <ThemeButton />
                    <motion.button
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className="md:hidden transition"
                        style={{
                            color:
                                resolvedTheme === "dark"
                                    ? "#d8b4fe"
                                    : "#3b0a45",
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {navbarOpen ? (
                            <XMarkIcon className="h-7 w-7" />
                        ) : (
                            <Bars3Icon className="h-7 w-7" />
                        )}
                    </motion.button>
                </div>

                <ul className="hidden md:flex gap-10 text-lg font-medium">
                    {navLinks.map((link, idx) => (
                        <li key={idx}>
                            <NavLink
                                href={link.path}
                                title={link.title}
                                className="relative hover:text-purple-600 transition-all after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-600 hover:after:w-full after:transition-all after:duration-300"
                                style={{
                                    color:
                                        resolvedTheme === "dark"
                                            ? "#d8b4fe"
                                            : "#200362",
                                }}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <AnimatePresence>
                {navbarOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <MenuOverlay
                            links={navLinks}
                            onClick={() => setNavbarOpen(false)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
