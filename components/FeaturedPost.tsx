"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import RevealText from "./RevealText";

const POST_URL = "https://www.instagram.com/p/Da0M7gfTEPs/";

const InstaIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

function Heart({ size, rot }: { size: number; rot: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `rotate(${rot}deg)` }}>
      <path
        fill="#c4a5e8"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  );
}

export default function FeaturedPost() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="featured" className="relative py-24 px-6 overflow-hidden">
      {/* Decorative floating hearts */}
      <div className="absolute left-[8%] top-[18%] floaty pointer-events-none hidden md:block">
        <Heart size={44} rot={-12} />
      </div>
      <div className="absolute right-[10%] bottom-[16%] floaty-slow pointer-events-none hidden md:block">
        <Heart size={56} rot={10} />
      </div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — pitch */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5b2d8e]/10 text-[#5b2d8e] text-sm font-medium mb-6 font-display">
              <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
              Trending right now
            </div>

            <RevealText
              as="h2"
              stagger={0.07}
              className="font-display text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-[#3d2259] mb-6"
              segments={[
                { text: "Our latest" },
                { text: "viral drop", className: "text-[#5b2d8e]" },
              ]}
            />

            <p className="text-[#3d2259]/60 text-lg leading-relaxed mb-8 max-w-md">
              Straight from our feed to yours — this is the reel everyone in HSR Layout
              is talking about. Give it a watch, then come taste it for yourself. 🍦
            </p>

            <motion.a
              href={POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-display inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#5b2d8e] text-white font-semibold text-lg shadow-xl shadow-[#5b2d8e]/25 hover:bg-[#7c3aed] transition-colors duration-300 cursor-pointer"
            >
              <InstaIcon className="w-5 h-5" />
              Watch on Instagram
            </motion.a>
          </motion.div>

          {/* Right — the embedded post */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 3 }}
            animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, type: "spring" }}
            className="flex justify-center"
          >
            <div className="rounded-[28px] bg-white p-3 shadow-[0_25px_60px_-20px_rgba(91,45,142,0.45)]">
              <iframe
                src={`${POST_URL}embed`}
                title="Melato featured Instagram post"
                className="w-[330px] sm:w-[360px] h-[620px] rounded-2xl border-0"
                allowFullScreen
                scrolling="no"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
