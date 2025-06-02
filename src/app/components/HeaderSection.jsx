"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useMotionValue, useTransform } from "framer-motion";
import BackgroundNetwork from "./BackgroundNetwork";
import useWindowSize from "@/hooks/useWindowSize";

const mobileWhatsAppLink = "https://wa.me/5548991574820";
const webWhatsAppLink = "https://web.whatsapp.com/send?phone=+5548991574820";

const HeaderSection = () => {
    const size = useWindowSize();

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [0, size.height || 1], [15, -15]);
    const rotateY = useTransform(mouseX, [0, size.width || 1], [-15, 15]);

    const [whatsAppLink, setWhatsAppLink] = useState(mobileWhatsAppLink);

    useEffect(() => {
        mouseX.set((size.width || 0) / 2);
        mouseY.set((size.height || 0) / 2);
    }, [size.width, size.height]);

    useEffect(() => {
        const isMobile =
            /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
                navigator.userAgent
            );
        setWhatsAppLink(isMobile ? mobileWhatsAppLink : webWhatsAppLink);
    }, []);

    const handleMouseMove = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => {
        mouseX.set((size.width || 0) / 2);
        mouseY.set((size.height || 0) / 2);
    };

    return (
        <section className="min-h-screen flex justify-center items-center relative overflow-hidden">
            <BackgroundNetwork />

            <div className="flex flex-col-reverse sm:grid sm:grid-cols-12 gap-8 w-full max-w-7xl px-4 relative z-10 mt-[-130px] sm:mt-0">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="col-span-12 sm:col-span-7 flex flex-col justify-center text-white"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-black dark:text-white break-words">
                        Oi, me chamo{" "}
                        <span className="text-[#361483] dark:text-cyan-400 font-bold">
                            Laura
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-medium mb-2 text-black dark:text-white">
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
                        className="text-[#230c57] dark:text-cyan-400 text-lg md:text-xl"
                    />

                    <div className="flex gap-4 mt-8">
                        <motion.a
                            href={whatsAppLink}
                            target="_blank"
                            className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#361483] hover:bg-[#2a0f6b] dark:bg-gradient-to-r dark:from-teal-500 dark:to-blue-500 text-white text-sm sm:text-base font-medium shadow-lg hover:shadow-xl"
                            whileHover={{
                                scale: 1.1,
                                rotate: [0, 4, -4, 2, -2, 0],
                            }}
                            transition={{
                                duration: 0.4,
                                type: "spring",
                                stiffness: 150,
                            }}
                        >
                            Fale comigo
                        </motion.a>

                        <motion.a
                            href="https://drive.google.com/file/d/1HASWECB_kECFECDvbTBgAd4Yp1wq0XwJ/view?usp=sharing"
                            target="_blank"
                            className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-400 text-white text-sm sm:text-base font-medium shadow-lg hover:shadow-xl"
                            whileHover={{
                                scale: 1.1,
                                rotate: [0, 4, -4, 2, -2, 0],
                            }}
                            transition={{
                                duration: 0.4,
                                type: "spring",
                                stiffness: 150,
                            }}
                        >
                            Currículo
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        perspective: 1000,
                        transformStyle: "preserve-3d",
                    }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="col-span-12 sm:col-span-5 flex justify-center items-center"
                >
                    <Image
                        src="/images/avatarMold.png"
                        alt="avatar"
                        className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto"
                        width={800}
                        height={800}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeaderSection;
