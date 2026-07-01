import { useMemo } from "react";
import { motion } from "framer-motion";

interface SparklesProps {
  count?: number;
  className?: string;
}

const GLYPHS = ["✦", "✧", "⋆", "✵"];

function Sparkles({ count = 24, className = "" }: SparklesProps) {
  const sparkles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 0.5 + Math.random() * 1.1,
        delay: Math.random() * 6,
        duration: 3 + Math.random() * 4,
        glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        drift: 20 + Math.random() * 30,
      })),
    [count]
  );

  return (
    <div className={`sparkle-field ${className}`} aria-hidden="true">
      {sparkles.map((s) => (
        <motion.span
          key={s.id}
          className="sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: `${s.size}rem`,
          }}
          initial={{ opacity: 0, y: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [0, -s.drift, -s.drift * 1.6],
            scale: [0.6, 1, 0.8],
            rotate: [0, 180],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {s.glyph}
        </motion.span>
      ))}
    </div>
  );
}

export default Sparkles;