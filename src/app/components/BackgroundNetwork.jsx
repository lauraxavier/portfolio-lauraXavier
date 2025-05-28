"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import useWindowSize from "@/hooks/useWindowSize";

const TechBackground = () => {
    const canvasRef = useRef(null);
    const size = useWindowSize();
    const mousePos = useRef({ x: size.width / 2, y: size.height / 2 });
    const points = useRef([]);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const numPoints = 70;
        const maxDistance = 120;

        canvas.width = size.width || window.innerWidth;
        canvas.height = size.height || window.innerHeight;

        points.current = [];
        for (let i = 0; i < numPoints; i++) {
            points.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                radius: Math.random() * 3 + 1,
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const gradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                100,
                canvas.width / 2,
                canvas.height / 2,
                canvas.width / 2
            );

            if (theme === "dark") {
                gradient.addColorStop(0, "#001f3f");
                gradient.addColorStop(1, "#000814");
            } else {
                gradient.addColorStop(0, "#e6d7ff");
                gradient.addColorStop(1, "#8a6bd1");
            }
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            points.current.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
                if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;
            });

            for (let i = 0; i < numPoints; i++) {
                for (let j = i + 1; j < numPoints; j++) {
                    const p1 = points.current[i];
                    const p2 = points.current[j];
                    const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

                    if (dist < maxDistance) {
                        const midX = (p1.x + p2.x) / 2;
                        const midY = (p1.y + p2.y) / 2;
                        const mouseDist = Math.hypot(
                            midX - mousePos.current.x,
                            midY - mousePos.current.y
                        );

                        if (mouseDist < maxDistance * 1.5) {
                            if (theme === "dark") {
                                ctx.strokeStyle = `rgba(0, 255, 255, ${
                                    ((maxDistance - dist) / maxDistance) *
                                    (1 - mouseDist / (maxDistance * 1.5))
                                })`;
                                ctx.shadowColor = "cyan";
                            } else {
                                ctx.strokeStyle = `rgba(138, 107, 209, ${
                                    ((maxDistance - dist) / maxDistance) *
                                    (1 - mouseDist / (maxDistance * 1.5))
                                })`;
                                ctx.shadowColor = "rgba(138, 107, 209, 0.9)";
                            }

                            ctx.lineWidth = 1.5;
                            ctx.shadowBlur = 12;
                            ctx.beginPath();
                            ctx.moveTo(p1.x, p1.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.stroke();
                            ctx.shadowBlur = 0;
                        }
                    }
                }
            }

            points.current.forEach((p) => {
                if (theme === "dark") {
                    ctx.fillStyle = "#00ffff";
                    ctx.shadowColor = "#00ffff";
                } else {
                    ctx.fillStyle = "#8a6bd1";
                    ctx.shadowColor = "rgba(138, 107, 209, 0.9)";
                }
                ctx.shadowBlur = 15;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            });

            requestAnimationFrame(animate);
        }

        animate();

        function onMouseMove(e) {
            mousePos.current = { x: e.clientX, y: e.clientY };
        }

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [size.width, size.height, theme]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1,
            }}
        />
    );
};

export default TechBackground;
