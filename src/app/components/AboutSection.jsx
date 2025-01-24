"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import {
    SiTypescript,
    SiJavascript,
    SiNextdotjs,
    SiTailwindcss,
    SiJest,
    SiFigma,
    SiStyledcomponents,
} from "react-icons/si";

const skillsWithIcons = [
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Git", icon: <FaGit /> },
    { name: "Jest", icon: <SiJest /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Styled-components", icon: <SiStyledcomponents /> },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => setTab(id));
    };

    const cardClasses =
        "bg-[#3b3b3b] shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(128,90,213,0.8)] cursor-pointer";

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <section
            className="flex flex-col justify-center items-center min-h-screen lg:mt-8 px-6"
            id="about"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl">
                <motion.div
                    className="flex items-center justify-center mb-6 md:mb-0"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src="/images/profile.png"
                        width={400}
                        height={400}
                        alt="Laura Xavier"
                    />
                </motion.div>
                <div className="text-left flex flex-col space-y-4">
                    <h2 className="text-3xl font-bold">Sobre mim</h2>
                    <p className="text-base text-white leading-relaxed">
                        Olá, sou Laura, uma desenvolvedora Frontend com foco em
                        React e habilidades sólidas em HTML, CSS e JavaScript.
                        Além das minhas habilidades técnicas, destaco-me pela
                        minha capacidade excepcional de colaboração e
                        comunicação, reconhecendo o valor da troca de ideias no
                        desenvolvimento de projetos.
                    </p>
                </div>
            </div>

            <div className="mt-14 w-full max-w-4xl">
                <div className="flex gap-4 justify-center mb-8">
                    <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                    >
                        Skills
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                    >
                        Educação
                    </TabButton>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={tab}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={cardVariants}
                        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full"
                    >
                        {tab === "skills" &&
                            skillsWithIcons.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className={`${cardClasses} flex flex-col items-center justify-center text-center space-y-4`}
                                    variants={cardVariants}
                                >
                                    <span className="text-4xl text-blue-500">
                                        {skill.icon}
                                    </span>
                                    <span className="font-medium text-lg">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}

                        {tab === "education" && (
                            <>
                                <motion.div
                                    className={cardClasses}
                                    variants={cardVariants}
                                >
                                    <h3 className="font-bold text-lg">
                                        React, Node.js
                                    </h3>
                                    <p className="text-gray-300">
                                        640 horas pela SoulCode Academy
                                    </p>
                                </motion.div>
                                <motion.div
                                    className={cardClasses}
                                    variants={cardVariants}
                                >
                                    <h3 className="font-bold text-lg">
                                        Web Front-End Fundamentos
                                    </h3>
                                    <p className="text-gray-300">
                                        HTML, CSS e JS - Udemy
                                    </p>
                                </motion.div>
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default AboutSection;
