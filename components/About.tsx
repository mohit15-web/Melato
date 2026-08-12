"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import RevealText from "./RevealText";

const features = [
  { icon: "🍓", title: "Real Fruit", desc: "Every scoop uses real, seasonal fruit. No artificial flavours, ever." },
  { icon: "🤝", title: "Handcrafted", desc: "Each dessert is made fresh daily by our in-house artisans." },
  { icon: "📍", title: "HSR Layout", desc: "Find us tucked in the heart of HSR Layout, Bangalore." },
  { icon: "✨", title: "Instagrammable", desc: "Viral aesthetics — designed to delight your eyes and taste buds." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Dashed rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#5b2d8e]/25 spin-slow" />

              {/* Central orb */}
              <div className="absolute inset-8 rounded-full bg-[#5b2d8e] flex items-center justify-center shadow-2xl shadow-[#5b2d8e]/30">
                <span className="text-7xl">🍦</span>
              </div>

              {/* Orbiting fruit */}
              {["🍓", "🫐", "🍑", "🍇"].map((emoji, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                  className="absolute inset-0"
                >
                  <div
                    className="absolute text-3xl bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-md"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${i * 90}deg) translateY(-160px) rotate(-${i * 90}deg) translate(-50%, -50%)`,
                    }}
                  >
                    {emoji}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute right-0 top-6 bg-[#5b2d8e] rounded-2xl p-4 shadow-xl shadow-[#5b2d8e]/30 floaty"
            >
              <div className="font-display text-2xl font-bold text-white">#1</div>
              <div className="text-xs text-white/70">Viral Desserts</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, type: "spring" }}
              className="absolute left-0 bottom-6 bg-white rounded-2xl p-4 shadow-xl floaty-slow"
            >
              <div className="font-display text-2xl font-bold text-[#5b2d8e]">HSR</div>
              <div className="text-xs text-[#3d2259]/50">Bangalore, India</div>
            </motion.div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-display text-[#7c3aed] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Our Story</p>
            <RevealText
              as="h2"
              stagger={0.07}
              className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#3d2259]"
              segments={[
                { text: "Born from a" },
                { text: "sweet obsession", className: "text-[#5b2d8e]" },
              ]}
            />
            <p className="text-[#3d2259]/60 text-lg leading-relaxed mb-5">
              Melato was born from one simple belief — desserts should be an experience.
              We started crafting mini fruit-shaped ice creams that looked too good to eat,
              and Bangalore couldn&apos;t get enough.
            </p>
            <p className="text-[#3d2259]/50 leading-relaxed mb-9">
              Every item tells a story of seasonal fruits, artisanal techniques, and a
              relentless pursuit of the perfect bite. Located in HSR Layout, we&apos;re
              Bangalore&apos;s sweetest secret — come find us.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex gap-3 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <div className="font-display font-semibold text-[#3d2259] text-sm">{f.title}</div>
                    <div className="text-[#3d2259]/45 text-xs mt-0.5 leading-relaxed">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
