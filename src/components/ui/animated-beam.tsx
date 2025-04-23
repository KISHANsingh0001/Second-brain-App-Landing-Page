"use client";
import { motion } from "framer-motion";
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.5 + i * 0.2,
            ease: [0.25, 0.4, 0.25, 1],
        },
    }),
};

const images = ["/pic2.png", "/pic1.png"];
export function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

export default function AnimatedBeam() {
    const [showGradient, setShowGradient] = useState(false);
    const [isFlashing, setIsFlashing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowGradient(true);
                    setIsFlashing(true);
                    setTimeout(() => setIsFlashing(false), 1000);
                }
            },

        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    // Scroll to the current image when index changes
    useEffect(() => {
        if (carouselRef.current) {
            const scrollWidth = carouselRef.current.scrollWidth;
            const itemWidth = scrollWidth / images.length;
            carouselRef.current.scrollTo({
                left: itemWidth * currentImageIndex,
                behavior: 'smooth'
            });
        }
    }, [currentImageIndex]);

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % images.length
        );
    };

    return (
        <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="w-full py-14 "
        >
         <div className="relative ">
          <ElegantShape
                   delay={0.2}
                   width={610}
                   height={140}
                   rotate={55}
                   gradient="from-indigo-500/[0.15]"
                   className=" absolute -inset-x-53 inset-y-190 m-auto "
                 />
         
                 <ElegantShape
                   delay={0.5}
                   width={500}
                   height={120}
                   rotate={55}
                   gradient="from-rose-500/[0.15]"
                   className="absolute inset-x-250 -inset-y-40 m-auto "
                 />
         
                 {/* <ElegantShape
                   delay={0.4}
                   width={300}
                   height={80}
                   rotate={-8}
                   gradient="from-violet-500/[0.15]"
                   className="left-[5%] md:left-[10%] bottom-[15%] md:bottom-[10%]"
                 /> */}
         
                 {/* <ElegantShape
                   delay={0.6}
                   width={200}
                   height={60}
                   rotate={20}
                   gradient="from-amber-500/[0.15]"
                   className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                 /> */}
         
                 {/* <ElegantShape
                   delay={0.7}
                   width={150}
                   height={40}
                   rotate={-25}
                   gradient="from-cyan-500/[0.15]"
                   className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                 /> */}

         </div>

            <div
                ref={containerRef}
                className="relative flex h-[400px] sm:h-[500px] md:h-[600px] w-full max-w-7xl mx-auto flex-col items-center justify-center overflow-visible"
            >
                {/* Orange Gradient Background */}
                <div
                    className={cn(
                        "absolute inset-0 -top-20 -left-8 -right-8 rounded-5xl bg-[radial-gradient(ellipse_at_center,_rgba(255,165,0,0.5),_rgba(255,165,0,0))] opacity-0 transition-all duration-1000 blur-3xl",
                        showGradient && "opacity-100",
                    )}
                />

                {/* Main Content Container */}
                <div
                    className="w-full h-full max-w-[90vw] max-h-[60vh] mx-4 rounded-lg shadow-xl overflow-hidden relative"
                >
                    <div
                        ref={carouselRef}
                        className="w-full h-full flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="w-full h-full flex-shrink-0 snap-start relative"
                            >
                                <Image
                                    src={src}
                                    alt={`Image ${index + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                                    className={`rounded-lg object-contain transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-100'}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex">

                    <div

                        className="cursor-pointer z-10 "
                        onClick={handlePrev}
                    >
                        <ArrowBigLeft color="white" size={40} className="hover:bg-blue-600" />
                    </div>

                    <div
                        className=" cursor-pointer z-10"
                        onClick={handleNext}
                    >
                        <ArrowBigRight color="white" size={40} className="hover:bg-blue-600" />
                    </div>

                </div>

            </div>
            
        </motion.div>
    )
}