"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 overflow-hidden bg-transparent">
      
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 z-20 space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
          </span>
          <span className="text-[10px] md:text-xs font-mono text-blue-300 uppercase tracking-widest">
            VIT Vellore Chapter
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none">
            IEEE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">EMBS</span>
          </h1>
        </div>

        <p className="max-w-md text-lg md:text-xl text-gray-300 font-medium leading-relaxed pl-6">
          Where <span className="text-white">engineering</span> meets <span className="text-white">biology</span>. 
          Advancing technology for the benefit of global healthcare.
        </p>


      </motion.div>

      {/* Image Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 relative mt-16 md:mt-0 flex justify-center items-center"
      >
        <div className="absolute w-72 h-72 md:w-96 md:h-96 border border-blue-500/10 rounded-full animate-pulse" />
        
        <div className="relative w-64 h-auto bg-blue-900/10 backdrop-blur-xl border-2 border-white/10 shadow-2xl overflow-hidden group">
          <Image 
            src="/hero-image.jpg" 
            alt="IEEE EMBS VIT" 
            width={320}
            height={480}
            className="object-cover backdrop-blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </motion.div>
    </section>
  );
}