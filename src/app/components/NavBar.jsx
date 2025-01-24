"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    { title: "Sobre mim", path: "#about" },
    { title: "Projetos", path: "#projects" },
    { title: "Contato", path: "#contact" },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [centered, setCentered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            setCentered(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeNavbar = () => setNavbarOpen(false);

    const navbarVariants = {
        initial: {
            backgroundColor: "#121212",
            boxShadow: "none",
            height: "80px",
            opacity: 1,
            height: "70px",
        },
        scrolled: {
            backgroundColor: "rgba(18, 18, 18, 0.9)",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
            opacity: isMobile ? 1 : 0.95,
            backdropFilter: "blur(10px)",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                opacity: { duration: 0.5 },
                backdropFilter: { duration: 0.3 },
            },
        },
    };

    return (
        <motion.nav
            variants={navbarVariants}
            initial="initial"
            animate={scrolled ? "scrolled" : "initial"}
            className="fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out"
        >
            <div className="flex items-center justify-between container mx-auto px-6 py-4">
                <Link href={"/"} className="text-2xl md:text-3xl font-semibold">
                    LX
                </Link>

                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 rounded-full border border-slate-300 text-slate-300 hover:text-white hover:bg-slate-600 transition-all duration-200"
                        >
                            <Bars3Icon className="h-6 w-6" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 rounded-full border border-slate-300 text-slate-300 hover:text-white hover:bg-slate-600 transition-all duration-200"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    )}
                </div>

                <div
                    className="menu hidden md:block md:w-auto"
                    initial="initial"
                    animate={centered ? "centered" : "initial"}
                >
                    <ul className="flex space-x-8 text-white">
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                initial="initial"
                                animate="animate"
                                whileHover="hover"
                            >
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? (
                <MenuOverlay links={navLinks} onClick={closeNavbar} />
            ) : null}
        </motion.nav>
    );
};

export default Navbar;
