"use client";

import { motion } from "framer-motion";
import { ElementType } from "react";

type Segment = { text: string; className?: string };

// Reveals text word-by-word as it scrolls into view (fade + rise, no clipping).
export default function RevealText({
  segments,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.05,
}: {
  segments: Segment[];
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  // Flatten every segment into words while remembering each word's style.
  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w.length) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <Tag className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block whitespace-nowrap">
          <motion.span
            className={`inline-block ${w.className ?? ""}`}
            initial={{ opacity: 0, y: 24, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{
              duration: 0.6,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {w.word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}
