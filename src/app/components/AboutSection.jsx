"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, AnimatePresence } from "framer-motion";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-[20px]">
                <li>React</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Nextjs</li>
                <li>Tailwind</li>
                <li>Styled Components</li>
                <li>Node.js</li>
                <li>Git</li>
                <li>Jest</li>
                <li>Figma</li>
            </ul>
        ),
    },
    {
        title: "Educação",
        id: "education",
        content: (
            <ul className="list-disc pl-[20px]">
                <li>React, Node.js - 640 horas pela SoulCode Academy</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    const imageVariants = {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
        exit: { scale: 0.8, opacity: 0, transition: { duration: 0.5 } },
    };

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section
            className="flex justify-center items-center min-h-screen lg:pt-14"
            id="about"
        >
            <div className="md:grid md:grid-cols-2 gap-6 items-center xl:gap-16">
                <motion.div
                    className="flex items-center justify-center mb-10"
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <Image
                        src="/images/profile.png"
                        width={500}
                        height={500}
                        alt="Laura Xavier"
                    />
                </motion.div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold mb-4">Sobre mim</h2>
                    <p className="text-base lg:text-lg">
                        Olá, sou Laura, uma desenvolvedora Frontend com foco em
                        React e habilidades sólidas em HTML, CSS e JavaScript.
                        Além das minhas habilidades técnicas, destaco-me pela
                        minha capacidade excepcional de colaboração e
                        comunicação, reconhecendo o valor da troca de ideias no
                        desenvolvimento de projetos. Sou atenta aos detalhes de
                        design e estou sempre buscando aprender e me aprimorar,
                        tanto em questões técnicas quanto em novos conceitos de
                        arquitetura e FrontEnd. Estou pronta para novos desafios
                        e para contribuir positivamente em equipes
                        colaborativas.
                    </p>
                    <div className="flex flex-row justify-start mt-8 min-h-14">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Educação{" "}
                        </TabButton>
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={tab}
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="mt-8 min-h-[200px]"
                        >
                            {TAB_DATA.find((t) => t.id === tab).content}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
