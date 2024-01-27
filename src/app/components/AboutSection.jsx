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
        <li>Nextjs</li>
        <li>Tailwind</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Git</li>
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
      className="text-white flex justify-center items-center min-h-screen lg:pt-14"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-6 items-center xl:gap-16">
        <motion.div
          className="flex items-center justify-center"
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Image src="/images/profile.png" width={500} height={500} />
        </motion.div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg">
            Oi, eu sou Laura, uma desenvolvedora Frontend com foco em React e
            habilidades sólidas em HTML, CSS e JavaScript.O que me destaca vai
            além do código. Sou ótima em colaboração e comunicação, acredito que
            a troca de ideias é fundamental. Cuidadosa com detalhes de design,
            estou sempre disposta a aprender e aprimorar minhas habilidades.
            Explore meu portfólio e veja como aplico essas habilidades em cada
            projeto. Estou pronta para novos desafios e para contribuir
            positivamente em equipes colaborativas.
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
              className="mt-8"
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
