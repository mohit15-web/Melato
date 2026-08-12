"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Wave from "./Wave";
import RevealText from "./RevealText";

// Floating heart positions
const hearts = [
  { x: "12%", y: "24%", size: 40, delay: 0, rot: -12 },
  { x: "62%", y: "30%", size: 56, delay: 0.6, rot: 10 },
  { x: "80%", y: "18%", size: 32, delay: 1.1, rot: -6 },
  { x: "30%", y: "70%", size: 28, delay: 0.9, rot: 8 },
  { x: "88%", y: "58%", size: 44, delay: 0.4, rot: -10 },
];

function Heart({ size, rot }: { size: number; rot: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `rotate(${rot}deg)` }}>
      <path
        fill="#5b2d8e"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain pt-24"
    >
      {/* Floating hearts */}
      {hearts.map((h, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: h.delay + 0.4, type: "spring", stiffness: 200 }}
          className="absolute floaty pointer-events-none z-10"
          style={{ left: h.x, top: h.y, animationDelay: `${h.delay}s` }}
        >
          <Heart size={h.size} rot={h.rot} />
        </motion.div>
      ))}

      {/* Center content */}
      <motion.div style={{ y: yText, opacity }} className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-[#5b2d8e] text-sm font-medium mb-8 font-display"
        >
          <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
          Now scooping · HSR Layout, Bangalore
        </motion.div>

        <RevealText
          as="h1"
          delay={0.3}
          stagger={0.08}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-[#3d2259] mb-8"
          segments={[
            { text: "Bengaluru's" },
            { text: "favourite", className: "font-bold text-[#5b2d8e]" },
            { text: "guilty pleasure." },
          ]}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-lg md:text-xl text-[#3d2259]/60 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Mini fruit-shaped ice creams, scoopable cookies, popsicles &amp; more —
          handcrafted daily and impossible to resist.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            className="font-display px-8 py-4 rounded-full bg-[#5b2d8e] text-white font-semibold text-lg shadow-xl shadow-[#5b2d8e]/25 hover:bg-[#7c3aed] transition-colors duration-300 flex items-center gap-2 cursor-pointer"
          >
            View Full Menu <span>→</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            className="font-display px-8 py-4 rounded-full bg-white text-[#5b2d8e] font-semibold text-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            See the Gallery
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Giant floating cones flanking the headline */}
      <motion.div
        initial={{ opacity: 0, x: -60, rotate: -20 }}
        animate={{ opacity: 1, x: 0, rotate: -12 }}
        transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
        className="hidden lg:block absolute left-[6%] bottom-[18%] text-9xl floaty-slow z-10 select-none"
      >
        🍦
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 60, rotate: 20 }}
        animate={{ opacity: 1, x: 0, rotate: 12 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
        className="hidden lg:block absolute right-[6%] bottom-[22%] text-8xl floaty z-10 select-none"
        style={{ animationDelay: "1.5s" }}
      >
        🍨
      </motion.div>

      {/* Bottom purple wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <Wave color="#5b2d8e" />
      </div>
    </section>
  );
}
