import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const MenuOverlay = ({ links, onClick }) => {
    const { resolvedTheme } = useTheme();

    const bgColor =
        resolvedTheme === "dark"
            ? "rgba(18, 18, 18, 0.486)"
            : "rgba(176, 152, 235, 0.8)";
    const textColor = resolvedTheme === "dark" ? "#ffffff" : "#1e1e1e";

    return (
        <motion.ul
            className="flex flex-col items-center py-8 gap-6 md:hidden"
            style={{
                backgroundColor: bgColor,
                color: textColor,
                backdropFilter: "blur(6px)",
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
        >
            {links.map((link, index) => (
                <motion.li
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <NavLink
                        href={link.path}
                        title={link.title}
                        onClick={onClick}
                        className="text-2xl font-semibold hover:text-purple-600 transition-colors duration-200"
                    />
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default MenuOverlay;
