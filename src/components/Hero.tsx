import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import Sparkles from "./Sparkles";
import "../styles/magic.css";
import "../styles/hero.css";

function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 0.6 });
  const glowY = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 0.6 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section className="hero" ref={sectionRef} onMouseMove={handleMouseMove}>
      <div className="hero-aurora aurora-1" />
      <div className="hero-aurora aurora-2" />
      <div className="hero-aurora aurora-3" />

      <motion.div className="hero-glow" style={{ x: glowX, y: glowY }} />

      <Sparkles count={26} />

      <motion.h2
        className="hero-eyebrow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ✦ For ✦
      </motion.h2>

      <motion.h1
        className="hero-name shimmer-text"
        initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.7, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        Rosie.
      </motion.h1>

      <motion.p
        className="hero-tagline"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        Every memory.
        <br />
        Every laugh.
        <br />
        Every little thing.
        <br />
        <br />
        <span className="italic-glow">Kept safe, like magic.</span>
      </motion.p>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
      >
        <motion.span
          className="scroll-star"
          animate={{ y: [0, 10, 0], rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        >
          ✦
        </motion.span>
        <span className="scroll-label">scroll for the story</span>
      </motion.div>
    </section>
  );
}

export default Hero;