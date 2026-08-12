"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import RevealText from "./RevealText";

const timings = [
  { day: "Monday – Friday", time: "12:00 PM – 10:00 PM" },
  { day: "Saturday", time: "11:00 AM – 11:00 PM" },
  { day: "Sunday", time: "11:00 AM – 11:00 PM" },
];

const InstaIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-display text-[#7c3aed] text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Come Visit Us
          </motion.p>
          <RevealText
            as="h2"
            stagger={0.08}
            className="font-display text-5xl md:text-6xl font-bold tracking-tight text-[#3d2259]"
            segments={[
              { text: "Find" },
              { text: "Melato", className: "text-[#5b2d8e]" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-2 relative rounded-3xl bg-[#5b2d8e] p-8 overflow-hidden shadow-xl shadow-[#5b2d8e]/20"
          >
            <div className="absolute top-4 right-4 text-6xl opacity-20">📍</div>
            <p className="font-display text-[#e9d5ff] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Location</p>
            <h3 className="font-display text-2xl font-bold text-white mb-2">HSR Layout, Bangalore</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">Karnataka, India · 560102</p>
            <motion.a
              href="https://maps.app.goo.gl/7FYGPqcbY9MRLeGS8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="font-display inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#5b2d8e] text-sm font-semibold shadow-lg cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </motion.a>
          </motion.div>

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative rounded-3xl bg-white p-8 overflow-hidden shadow-xl shadow-[#5b2d8e]/10"
          >
            <div className="absolute top-4 right-4 text-5xl opacity-10">📸</div>
            <p className="font-display text-[#7c3aed] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Follow Us</p>
            <h3 className="font-display text-2xl font-bold text-[#3d2259] mb-2">@themelato</h3>
            <p className="text-[#3d2259]/50 text-sm mb-6">360+ followers & growing 🚀</p>
            <motion.a
              href="https://instagram.com/themelato"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="font-display inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5b2d8e] text-white text-sm font-semibold shadow-lg hover:bg-[#7c3aed] transition-colors cursor-pointer"
            >
              <InstaIcon />
              Follow
            </motion.a>
          </motion.div>
        </div>

        {/* Timings */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="rounded-3xl bg-white p-8 shadow-xl shadow-[#5b2d8e]/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🕐</span>
            <div>
              <h3 className="font-display text-xl font-bold text-[#3d2259]">Opening Hours</h3>
              <p className="text-[#3d2259]/45 text-sm">We&apos;re open most days — come satisfy that craving</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {timings.map((t, i) => (
              <div key={i} className="flex flex-col gap-1 p-4 rounded-2xl bg-[#f7f1ea]">
                <span className="text-[#3d2259]/50 text-xs font-medium">{t.day}</span>
                <span className="font-display text-[#5b2d8e] font-semibold">{t.time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
