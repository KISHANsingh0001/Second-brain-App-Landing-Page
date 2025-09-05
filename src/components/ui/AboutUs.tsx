"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Users, Clock, Lock, Share2, Brain } from "lucide-react";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => (
  <motion.div 
    variants={fadeIn()}
    className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors"
  >
    <div className="p-3 rounded-full bg-blue-500/10 mb-4">
      <Icon className="w-6 h-6 text-blue-400" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-zinc-400 text-center">{description}</p>
  </motion.div>
);


export default function AboutUs() {
  return (
    <section className="pt-24 pb-1 bg-[#030303] text-zinc-50 overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        {/* Decorative background */}
        <div className="absolute top-10 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] -z-10" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn()}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            About Second Brain
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-10 rounded-full" />
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-zinc-300">
            Your personal knowledge hub designed to organize your digital life and extend your cognitive capabilities.
          </p>
        </motion.div>
        
        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <motion.div 
            variants={fadeIn(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-transparent border border-white/5"
          >
            <div className="absolute -top-6 left-8 bg-blue-500 text-white p-3 rounded-xl">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4 mt-2 text-blue-300">Our Mission</h3>
            <p className="text-zinc-300 mb-4 leading-relaxed">
              To empower individuals by providing a seamless platform for capturing, organizing, and retrieving their digital knowledge, transforming scattered information into actionable insights.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              We believe your thoughts and information are your most valuable assets, and they should be accessible whenever and wherever you need them.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeIn(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-transparent border border-white/5"
          >
            <div className="absolute -top-6 left-8 bg-purple-500 text-white p-3 rounded-xl">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4 mt-2 text-purple-300">Our Vision</h3>
            <p className="text-zinc-300 mb-4 leading-relaxed">
              To revolutionize how people interact with their digital content by creating a second brain that extends human cognitive capabilities and reduces information overload.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              We envision a world where no valuable information is lost, and everyone can build upon their knowledge efficiently and effectively.
            </p>
          </motion.div>
        </div>
        
        {/* Core Values */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={CheckCircle2} 
              title="Quality" 
              description="We prioritize quality in every aspect of our platform, ensuring a reliable and efficient experience." 
            />
            <FeatureCard 
              icon={Lock} 
              title="Privacy" 
              description="Your data belongs to you. We implement robust security measures to keep your information private and secure." 
            />
            <FeatureCard 
              icon={Share2} 
              title="Collaboration" 
              description="We enable seamless sharing and collaboration while maintaining full control over your content." 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}