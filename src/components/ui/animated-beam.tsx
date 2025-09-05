// "use client";
// import { motion } from "framer-motion";
// import { cn } from '@/lib/utils'
// import Image from 'next/image'
// import React, { useEffect, useState, useRef } from 'react'
// import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
// import ElegantShape from "./elegantShape";

// const fadeUpVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 1,
//             delay: 0.5 + i * 0.2,
//             ease: [0.25, 0.4, 0.25, 1],
//         },
//     }),
// };

// const images = ["/pic2.png", "/pic1.png"];


// export default function AnimatedBeam() {
//     const [showGradient, setShowGradient] = useState(false);
//     const [isFlashing, setIsFlashing] = useState(false);
//     const containerRef = useRef<HTMLDivElement>(null);
//     const carouselRef = useRef<HTMLDivElement>(null);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setShowGradient(true);
//                     setIsFlashing(true);
//                     setTimeout(() => setIsFlashing(false), 1000);
//                 }
//             },

//         );

//         if (containerRef.current) {
//             observer.observe(containerRef.current);
//         }

//         return () => {
//             if (containerRef.current) {
//                 observer.unobserve(containerRef.current);
//             }
//         };
//     }, []);

//     // Scroll to the current image when index changes
//     useEffect(() => {
//         if (carouselRef.current) {
//             const scrollWidth = carouselRef.current.scrollWidth;
//             const itemWidth = scrollWidth / images.length;
//             carouselRef.current.scrollTo({
//                 left: itemWidth * currentImageIndex,
//                 behavior: 'smooth'
//             });
//         }
//     }, [currentImageIndex]);

//     const handlePrev = () => {
//         setCurrentImageIndex((prevIndex) =>
//             (prevIndex - 1 + images.length) % images.length
//         );
//     };

//     const handleNext = () => {
//         setCurrentImageIndex((prevIndex) =>
//             (prevIndex + 1) % images.length
//         );
//     };

//         //  <div className="relative ">
//         //   <ElegantShape
//         //            delay={0.2}
//         //            width={610}
//         //            height={140}
//         //            rotate={55}
//         //            gradient="from-indigo-500/[0.15]"
//         //            className=" absolute -inset-x-53 inset-y-190 m-auto "
//         //          />
         
//         //          <ElegantShape
//         //            delay={0.5}
//         //            width={500}
//         //            height={120}
//         //            rotate={55}
//         //            gradient="from-rose-500/[0.15]"
//         //            className="absolute inset-x-250 -inset-y-40 m-auto "
//         //          />
         
//         //          {/* <ElegantShape
//         //            delay={0.4}
//         //            width={300}
//         //            height={80}
//         //            rotate={-8}
//         //            gradient="from-violet-500/[0.15]"
//         //            className="left-[5%] md:left-[10%] bottom-[15%] md:bottom-[10%]"
//         //          /> */}
         
//         //          {/* <ElegantShape
//         //            delay={0.6}
//         //            width={200}
//         //            height={60}
//         //            rotate={20}
//         //            gradient="from-amber-500/[0.15]"
//         //            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
//         //          /> */}
         
//         //          {/* <ElegantShape
//         //            delay={0.7}
//         //            width={150}
//         //            height={40}
//         //            rotate={-25}
//         //            gradient="from-cyan-500/[0.15]"
//         //            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
//         //          /> */}

//         //  </div>
//     return (
//       <div className="relative w-full py-14">

//          {/* <div className="absolute inset-0 overflow-hidden">
//                  <ElegantShape
//                    delay={0.3}
//                    width={600}
//                    height={140}
//                    rotate={12}
//                    gradient="from-indigo-500/[0.15]"
//                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
//                  />
         
//                  <ElegantShape
//                    delay={0.5}
//                    width={500}
//                    height={120}
//                    rotate={-15}
//                    gradient="from-rose-500/[0.15]"
//                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
//                  />
         
//                  <ElegantShape
//                    delay={0.4}
//                    width={300}
//                    height={80}
//                    rotate={-8}
//                    gradient="from-violet-500/[0.15]"
//                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
//                  />
         
//                  <ElegantShape
//                    delay={0.6}
//                    width={200}
//                    height={60}
//                    rotate={20}
//                    gradient="from-amber-500/[0.15]"
//                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
//                  />
         
//                  <ElegantShape
//                    delay={0.7}
//                    width={150}
//                    height={40}
//                    rotate={-25}
//                    gradient="from-cyan-500/[0.15]"
//                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
//                  />
//          </div> */}
     
//     <motion.div
//       custom={0}
//       variants={fadeUpVariants}
//       initial="hidden"
//       animate="visible"
//       className="w-full py-14"
//     >
//       <div
//         ref={containerRef}
//         className="relative flex h-[16rem] sm:h-[25.625rem] sm:w-[600px] md:h-[483px] md:w-[800px] 
//         w-full max-w-5xl mx-auto flex-col items-center justify-center overflow-visible "
//       >
//         {/* Orange Gradient Background */}
//         <div
//           className={cn(
//             "absolute inset-0 -top-20 -left-8 -right-8 rounded-5xl bg-[radial-gradient(ellipse_at_center,_rgba(255,165,0,0.5),_rgba(255,165,0,0))] opacity-0 transition-all duration-1000 blur-3xl",
//             showGradient && "opacity-100"
//           )}
//         />

   
       

//         {/* Main Content Container */}
//         <div className="w-full h-full mx-4 rounded-lg shadow-xl overflow-hidden ">
//           <div
//             ref={carouselRef}
//             className="w-full h-full flex overflow-x-auto scroll-smooth"
//             style={{ scrollbarWidth: "none" }}
//           >
//             {images.map((src, index) => (
//               <div
//                 key={index}
//                 className="w-full h-full flex-shrink-0 snap-start relative"
//               >
//                 <Image
//                   src={src}
//                   alt={`Image ${index + 1}`}
//                   fill
//                   className={`rounded-lg object-contain transition-opacity duration-500 ${
//                     index === currentImageIndex
//                       ? "opacity-100"
//                       : "opacity-100"
//                   }`}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <div className="flex">
//           <div
//             className="cursor-pointer z-10"
//             onClick={handlePrev}
//           >
//             <ArrowBigLeft color="white" size={40} className="hover:bg-blue-600" />
//           </div>

//           <div
//             className="cursor-pointer z-10"
//             onClick={handleNext}
//           >
//             <ArrowBigRight color="white" size={40} className="hover:bg-blue-600" />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//     </div>
//     )
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import ElegantShape from "./elegantShape";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3 + i * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const slideVariants = {
  hidden: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const images = ["/pic2.png", "/pic1.png"];
const AUTO_SLIDE_INTERVAL = 5000; // Auto slide every 5 seconds

export default function AnimatedBeam() {
  const [showGradient, setShowGradient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowGradient(true);
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

  // Setup autoplay
  useEffect(() => {
    if (autoplayEnabled) {
      autoplayTimerRef.current = setInterval(() => {
        handleNext();
      }, AUTO_SLIDE_INTERVAL);
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [autoplayEnabled, currentIndex]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplayEnabled(false);
  const handleMouseLeave = () => setAutoplayEnabled(true);

 

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      setAutoplayEnabled(true); // Reset autoplay timer
    }
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      setAutoplayEnabled(true); // Reset autoplay timer
    }
  };
  return (
    <div className="relative w-full py-8 md:py-14">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
      
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
      </div>
    
      <motion.div
        custom={0}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto px-4 md:px-6"
      >
        {/* Carousel title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white/90">
          Second Brain in Action
        </h2>

        {/* Main carousel container */}
        <div
          ref={containerRef}
          className="relative aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Gradient background effect */}
          <div
            className={cn(
              "absolute inset-0 -top-20 -left-8 -right-8 rounded-5xl bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.3),_rgba(255,165,0,0))] opacity-0 transition-all duration-1000 blur-3xl",
              showGradient && "opacity-100"
            )}
          />
          {/* Image slides with animations */}
          <div className="w-full h-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Feature screenshot ${currentIndex + 1}`}
                  fill
                  priority={currentIndex === 0}
                  className="object-contain object-center"
                />
                
                {/* Caption overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                  <p className="text-white text-lg md:text-xl font-medium">
                    {currentIndex === 0 ? "Organize your digital knowledge" : "Access your content anywhere"}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-blue-500 w-6" 
                  : "bg-gray-400/50 hover:bg-gray-300/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Image counter */}
        <div className="text-center mt-4 text-white/70 text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </div>
  );
}