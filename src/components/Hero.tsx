import { motion } from "framer-motion";

import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        For
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
          duration: 1.2,
        }}
      >
        Rosie.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.8,
          duration: 1,
        }}
      >
        Every memory.
        <br />
        Every laugh.
        <br />
        Every little thing.
        <br />
        <br />
        Kept safe.
      </motion.p>

      <motion.div
        className="scroll-arrow"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        ↓
      </motion.div>
    </section>
  );
}

export default Hero;