"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const mobileWts = "https://wa.me/5548991574820";
const webWts = "https://web.whatsapp.com/send?phone=+555548991574820";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                });
            }

            window.addEventListener("resize", handleResize);

            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return windowSize;
}

const HeaderSection = () => {
    const size = useWindowSize();

    return (
        <section className="min-h-screen mb-[150px] flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-12 min-h-[510px]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="col-span-12 sm:col-span-12 sm:text-center sm:justify-center order-2 md:order-1 sm:order-1 md:justify-center w-full min-h-[325px]"
                >
                    <h1 className="mb-2 mt-10 lg:mt-0 min-h-[460px] lg:min-h-[360px] text-zinc-100 text-[35px] sm:text-[50px] md:text-[40px] lg:text-[60px] lg:leading-normal font-extrabold text-center  ">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            Olá! Sua empresa está em busca de uma desenvolvedora
                            Front End
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Com experiência em React.",
                                2000,
                                "Com conhecimento em HTML, CSS e JavaScript.",
                                2000,
                                "Com conhecimento de Design.",
                                2000,
                                "Capacitada para resolver problemas.",
                                2000,
                                "Ótima em Colaboração e Comunicação.",
                                2000,
                                "Disposta á aprender sempre.",
                                2000,
                                "Cuidadosa com detalhes de design.",
                                2000,
                                "Com capacidade de gerenciar o tempo .",
                                2000,
                            ]}
                            wrapper="span"
                            speed={70}
                            repeat={Infinity}
                        />
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-12 sm:col-span-12  lg:mt-0 order-1 sm:order-2 flex flex-col lg:flex-row items-center justify-around"
                >
                    <div className="rounded-full w-[350px] h-[350px] lg:w-[350px] lg:h-[350px] relative mb-[40px] mt-[50px] flex justify-center items-center">
                        <Image
                            src="/images/avatar2.png"
                            alt="avatar"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={800}
                            height={800}
                        />
                    </div>
                    <div className="mb-3 lg:mb-0 justify-center items-center flex flex-col md:flex-row md:items-baseline md:gap-4 lg:gap-4">
                        <motion.a
                            href={size.width < 700 ? mobileWts : webWts}
                            target="_blank"
                            className="px-5 inline-block py-2 w-full max-w-[210px] sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white"
                            whileHover={{
                                scale: 1.2,
                                rotate: [0, 10, -10, 5, -5, 0],
                                backgroundColor: "#4B5563",
                            }}
                            transition={{
                                duration: 0.5,
                                type: "spring",
                                stiffness: 150,
                            }}
                        >
                            Fale comigo
                        </motion.a>
                        <motion.a
                            href="https://drive.google.com/file/d/1m7O3UUf66GmHUJGWM6PO_PbaQQU3Xz_K/view?usp=sharing"
                            className="px-1 inline-block py-1 w-full max-w-[210px] sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white mt-3"
                            whileHover={{
                                scale: 1.2,
                                rotate: [0, 10, -10, 5, -5, 0],
                                backgroundColor: "#4B5563",
                            }}
                            transition={{
                                duration: 0.5,
                                type: "spring",
                                stiffness: 150,
                            }}
                            target="_blank"
                        >
                            <span className="block bg-[#121212] text-center hover:bg-slate-800 rounded-full px-4 py-1">
                                Currículo
                            </span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeaderSection;
