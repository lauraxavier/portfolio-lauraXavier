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
        <section className="min-h-screen flex justify-center items-center ">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 w-full max-w-7xl px-4">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="col-span-12 sm:col-span-7 flex flex-col justify-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Oi, me chamo{" "}
                        <span className="text-cyan-400">Laura</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium mb-2">
                        Sou desenvolvedora Front-End
                    </h2>
                    <TypeAnimation
                        sequence={[
                            "Com experiência em React e React Native.",
                            2000,
                            "Com conhecimento em HTML, CSS e JavaScript.",
                            2000,
                            "Cuidadosa com detalhes de design.",
                            2000,
                            "Disposta á aprender sempre.",
                            2000,
                            "Pronta para enfrentar novos desafios.",
                            2000,
                            "Habilidade em trabalhar em equipe e metodologias ágeis.",
                            2000,
                        ]}
                        wrapper="div"
                        speed={50}
                        repeat={Infinity}
                        className="text-cyan-400 text-lg md:text-xl"
                    />

                    <div className="flex gap-4 mt-8">
                        <motion.a
                            href={size.width < 700 ? mobileWts : webWts}
                            target="_blank"
                            className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm sm:text-base font-medium shadow-lg hover:shadow-xl"
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
                            href="https://drive.google.com/file/d/1g_Drn8tpZJ84v4ChZjeYDfiIc620mTXq/view?usp=sharing"
                            target="_blank"
                            className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gray-700 text-white text-sm sm:text-base font-medium shadow-lg hover:bg-gray-600"
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
                            Currículo
                        </motion.a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="col-span-12 sm:col-span-5 flex justify-center items-center"
                >
                    <div className="rounded-full w-[350px] h-[350px] lg:w-[350px] lg:h-[350px] relative mb-[40px] mt-[50px] flex justify-center items-center">
                        <Image
                            src="/images/avatar2.png"
                            alt="avatar"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                            width={800}
                            height={800}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeaderSection;
