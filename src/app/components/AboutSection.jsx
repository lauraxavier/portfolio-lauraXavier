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
        "bg-white dark:bg-[#3b3b3b] text-gray-800 dark:text-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(128,90,213,0.8)] cursor-pointer";

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
                    className="flex items-center justify-center mb-6 md:mb-0 perspective-3d group"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="rounded-xl shadow-[0_0_20px_rgba(128,90,213,0.3)] transition-transform duration-500 group-hover:rotate-[2deg] group-hover:scale-105"
                        whileHover={{ rotateY: 5, rotateX: 2 }}
                        transition={{ type: "spring", stiffness: 120 }}
                    >
                        <Image
                            src="/images/familyDev.png"
                            width={400}
                            height={400}
                            alt="Laura Xavier e família"
                            className="rounded-xl object-cover"
                        />
                    </motion.div>
                </motion.div>

                <div className="text-left flex flex-col space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Sobre mim
                    </h2>
                    <p className="text-base text-gray-800 dark:text-white leading-relaxed font-bold">
                        Oi! Eu sou a Laura — desenvolvedora front-end com foco
                        em React. Aqui em casa, programar é quase um esporte em
                        família: meu marido é dev sênior, meu filho de 12 anos
                        já coda e até minha filha de 8 está indo pelo mesmo
                        caminho, rs.
                        <br />
                        <br />
                        Foi nesse ambiente criativo que comecei minha jornada na
                        tecnologia, participando de projetos freelancers com meu
                        marido, aprendendo na prática, errando, refatorando e
                        crescendo.
                        <br />
                        <br />
                        Antes do mundo tech, trabalhei no comércio desde os 13
                        anos e também fui maquiadora — o que me ensinou muito
                        sobre lidar com pessoas, entender necessidades e, claro,
                        ter um bom olhar para detalhes (o que ajuda bastante com
                        CSS!).
                        <br />
                        <br />
                        Hoje, além das minhas habilidades em HTML, CSS,
                        JavaScript e React, tenho uma forte capacidade de
                        colaboração, comunicação e adaptabilidade.
                        <br />
                        <br />
                        Acredito que o bom código vai além da tela: ele nasce de
                        boas conversas, de times que se escutam e de pessoas que
                        gostam de construir juntas.
                        <br />
                        <br />
                        Se você procura alguém que une bagagem de vida,
                        curiosidade infinita e uma pitada de bom humor, bora
                        conversar?
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
                                    <span className="text-4xl text-blue-500 dark:text-purple-400">
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
                                    <p className="text-gray-700 dark:text-gray-300">
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
                                    <p className="text-gray-700 dark:text-gray-300">
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
