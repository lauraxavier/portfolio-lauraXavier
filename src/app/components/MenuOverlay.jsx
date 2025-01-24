import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links, onClick }) => {
    return (
        <motion.ul
            className="flex flex-col py-4 items-center bg-[#121212e5] mt-[-2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {links.map((link, index) => (
                <motion.li
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <NavLink
                        href={link.path}
                        title={link.title}
                        onClick={onClick}
                    />
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default MenuOverlay;
