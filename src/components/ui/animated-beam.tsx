"use client";
import { motion } from "framer-motion";
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import ElegantShape from "./elegantShape";

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

        //  <div className="relative ">
        //   <ElegantShape
        //            delay={0.2}
        //            width={610}
        //            height={140}
        //            rotate={55}
        //            gradient="from-indigo-500/[0.15]"
        //            className=" absolute -inset-x-53 inset-y-190 m-auto "
        //          />
         
        //          <ElegantShape
        //            delay={0.5}
        //            width={500}
        //            height={120}
        //            rotate={55}
        //            gradient="from-rose-500/[0.15]"
        //            className="absolute inset-x-250 -inset-y-40 m-auto "
        //          />
         
        //          {/* <ElegantShape
        //            delay={0.4}
        //            width={300}
        //            height={80}
        //            rotate={-8}
        //            gradient="from-violet-500/[0.15]"
        //            className="left-[5%] md:left-[10%] bottom-[15%] md:bottom-[10%]"
        //          /> */}
         
        //          {/* <ElegantShape
        //            delay={0.6}
        //            width={200}
        //            height={60}
        //            rotate={20}
        //            gradient="from-amber-500/[0.15]"
        //            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        //          /> */}
         
        //          {/* <ElegantShape
        //            delay={0.7}
        //            width={150}
        //            height={40}
        //            rotate={-25}
        //            gradient="from-cyan-500/[0.15]"
        //            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        //          /> */}

        //  </div>
    return (
      <div className="relative w-full py-14">
         <div className="absolute inset-0 overflow-hidden">
                 <ElegantShape
                   delay={0.3}
                   width={600}
                   height={140}
                   rotate={12}
                   gradient="from-indigo-500/[0.15]"
                   className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                 />
         
                 <ElegantShape
                   delay={0.5}
                   width={500}
                   height={120}
                   rotate={-15}
                   gradient="from-rose-500/[0.15]"
                   className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                 />
         
                 <ElegantShape
                   delay={0.4}
                   width={300}
                   height={80}
                   rotate={-8}
                   gradient="from-violet-500/[0.15]"
                   className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                 />
         
                 <ElegantShape
                   delay={0.6}
                   width={200}
                   height={60}
                   rotate={20}
                   gradient="from-amber-500/[0.15]"
                   className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                 />
         
                 <ElegantShape
                   delay={0.7}
                   width={150}
                   height={40}
                   rotate={-25}
                   gradient="from-cyan-500/[0.15]"
                   className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                 />
               </div>
     
    <motion.div
      custom={0}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="w-full py-14"
    >
      <div
        ref={containerRef}
        className="relative flex h-[16rem] sm:h-[25.625rem] sm:w-[600px] md:h-[483px] md:w-[800px] 
        w-full max-w-5xl mx-auto flex-col items-center justify-center overflow-visible "
      >
        {/* Orange Gradient Background */}
        <div
          className={cn(
            "absolute inset-0 -top-20 -left-8 -right-8 rounded-5xl bg-[radial-gradient(ellipse_at_center,_rgba(255,165,0,0.5),_rgba(255,165,0,0))] opacity-0 transition-all duration-1000 blur-3xl",
            showGradient && "opacity-100"
          )}
        />

   
       

        {/* Main Content Container */}
        <div className="w-full h-full mx-4 rounded-lg shadow-xl overflow-hidden ">
          <div
            ref={carouselRef}
            className="w-full h-full flex overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "none" }}
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
                  className={`rounded-lg object-contain transition-opacity duration-500 ${
                    index === currentImageIndex
                      ? "opacity-100"
                      : "opacity-100"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex">
          <div
            className="cursor-pointer z-10"
            onClick={handlePrev}
          >
            <ArrowBigLeft color="white" size={40} className="hover:bg-blue-600" />
          </div>

          <div
            className="cursor-pointer z-10"
            onClick={handleNext}
          >
            <ArrowBigRight color="white" size={40} className="hover:bg-blue-600" />
          </div>
        </div>
      </div>
    </motion.div>
    </div>
    )
}