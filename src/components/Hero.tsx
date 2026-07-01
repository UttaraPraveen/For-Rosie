import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import Sparkles from "./Sparkles";
import "../styles/pixel-theme.css";
import "../styles/hero.css";

const BOOT_LINES = [
  "LOADING MEMORIES.SYS ...",
  "found 1 (one) rosie",
  "importing every laugh...",
  "ready.",
];

function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 18, mass: 0.5 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 18, mass: 0.5 });

  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= BOOT_LINES.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 500);
    return () => clearTimeout(t);
  }, [visibleLines]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section className="hero" ref={sectionRef} onMouseMove={handleMouseMove}>
      <div className="hero-grid-bg" />
      <motion.div className="hero-glow" style={{ x: glowX, y: glowY }} />
      <Sparkles count={16} />

      <motion.div
        className="crt pixel-panel"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pixel-titlebar">
          <span>★ ROSIE.SYS</span>
        </div>
        <div className="crt-screen">
          <div className="crt-scanlines" />
          {BOOT_LINES.slice(0, visibleLines).map((l, i) => (
            <p key={i} className="crt-line">
              {">"} {l}
            </p>
          ))}
          <span className="crt-cursor">█</span>
        </div>
      </motion.div>

      <motion.h1
        className="hero-name"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        FOR ROSIE
      </motion.h1>

      <motion.p
        className="hero-tagline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        every memory. every laugh. every little thing.
        <br />
        kept safe, pixel by pixel.
      </motion.p>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.5 }}
      >
        <motion.span
          className="scroll-arrow"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        >
          ▼
        </motion.span>
        <span className="scroll-label">SCROLL</span>
      </motion.div>
    </section>
  );
}

export default Hero;