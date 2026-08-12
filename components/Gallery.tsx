"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import RevealText from "./RevealText";

const galleryItems = [
  { emoji: "🍓🍦", label: "Strawberry Scoop", tint: "bg-[#fce7f0]", span: "col-span-1 row-span-2" },
  { emoji: "🫐🍧", label: "Blueberry Sorbet", tint: "bg-[#ede4fb]", span: "col-span-1 row-span-1" },
  { emoji: "🍑🍨", label: "Peach Gelato", tint: "bg-[#fde8d3]", span: "col-span-1 row-span-1" },
  { emoji: "🍪✨", label: "Scoopable Cookie", tint: "bg-[#fbeecf]", span: "col-span-2 row-span-1" },
  { emoji: "🍇🫙", label: "Grape Popsicle", tint: "bg-[#efe0fb]", span: "col-span-1 row-span-1" },
  { emoji: "🥭🌟", label: "Mango Delight", tint: "bg-[#fbe0c9]", span: "col-span-1 row-span-1" },
];

const instaPosts = [
  { caption: "The Most Viral Fruit Ice Creams in Bengaluru! 🍓🍦", likes: "2.4K", emoji: "🍓", tint: "bg-[#fce7f0]" },
  { caption: "Must try in HSR Layout 🔥", likes: "1.8K", emoji: "🫐", tint: "bg-[#ede4fb]" },
  { caption: "Fruit or ice cream? Why not both! 😍", likes: "3.1K", emoji: "🍑", tint: "bg-[#fde8d3]" },
  { caption: "Our mini fruit scoops just dropped ✨", likes: "2.7K", emoji: "🍇", tint: "bg-[#efe0fb]" },
  { caption: "The perfect summer treat 🌞", likes: "1.5K", emoji: "🥭", tint: "bg-[#fbe0c9]" },
  { caption: "Scoopable cookies — gone in seconds 🍪", likes: "4.2K", emoji: "🍪", tint: "bg-[#fbeecf]" },
];

const InstaIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

function GalleryCard({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`${item.span} ${item.tint} relative rounded-3xl overflow-hidden cursor-pointer min-h-[160px] flex items-center justify-center shadow-sm`}
    >
      <motion.span
        className="text-7xl"
        animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 8 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {item.emoji}
      </motion.span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute inset-0 bg-[#5b2d8e]/85 flex items-end p-4"
      >
        <span className="font-display text-white font-semibold">{item.label}</span>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="gallery" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            className="font-display text-[#7c3aed] text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            As seen on Instagram
          </motion.p>
          <RevealText
            as="h2"
            stagger={0.08}
            className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-4 text-[#3d2259]"
            segments={[
              { text: "Too pretty" },
              { text: "to eat", className: "text-[#5b2d8e]" },
            ]}
          />
          <motion.a
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            href="https://instagram.com/themelato"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 text-[#5b2d8e] hover:text-[#7c3aed] transition-colors text-sm font-medium font-display cursor-pointer"
          >
            <InstaIcon />
            @themelato · Follow us
          </motion.a>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-3 gap-4 mb-14" style={{ gridAutoRows: "180px" }}>
          {galleryItems.map((item, i) => (
            <GalleryCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Instagram feed cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {instaPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative aspect-square rounded-2xl ${post.tint} overflow-hidden cursor-pointer flex items-center justify-center shadow-sm transition-all duration-300`}
            >
              <span className="text-5xl">{post.emoji}</span>
              <div className="absolute inset-0 bg-[#5b2d8e]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <div>
                  <p className="text-white text-[11px] leading-tight mb-1 line-clamp-2">{post.caption}</p>
                  <p className="text-[#e9d5ff] text-[11px] font-semibold">❤️ {post.likes}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
