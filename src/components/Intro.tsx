import { motion } from "framer-motion";

import Sparkles from "./Sparkles";
import "../styles/magic.css";
import "../styles/intro.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const line = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function Intro() {
  return (
    <section className="intro">
      <Sparkles count={16} />

      <motion.div
        className="intro-content glass-panel"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span className="intro-charm" variants={line}>
          ✦ ⋆ ｡ ˚ ✦
        </motion.span>

        <motion.p className="line" variants={line}>
          Dear Rosie,
        </motion.p>

        <motion.p className="line" variants={line}>
          some days sparkle so loud you'd remember them anyway.
        </motion.p>

        <motion.p className="line highlight" variants={line}>
          It's the quiet ones I worry about losing.
        </motion.p>

        <motion.div className="divider" variants={line}>
          ⋆⁺₊✧
        </motion.div>

        <motion.p className="line" variants={line}>
          So I started catching them —
        </motion.p>

        <motion.p className="line highlight" variants={line}>
          the tiny, glittering nothings
        </motion.p>

        <motion.p className="line" variants={line}>
          and keeping them somewhere safe.
        </motion.p>

        <motion.div className="divider" variants={line}>
          ⋆⁺₊✧
        </motion.div>

        <motion.p className="line" variants={line}>
          The socks that never match.
        </motion.p>
        <motion.p className="line" variants={line}>
          The 2am voice notes.
        </motion.p>
        <motion.p className="line" variants={line}>
          The way you laugh before the joke's even finished.
        </motion.p>

        <motion.div className="divider" variants={line}>
          ⋆⁺₊✧
        </motion.div>

        <motion.p className="line" variants={line}>
          None of it would make a photo album.
        </motion.p>

        <motion.p className="line highlight" variants={line}>
          All of it makes you, you.
        </motion.p>

        <motion.h2 className="intro-title shimmer-text" variants={line}>
          Welcome to your little pocket of magic.
        </motion.h2>
      </motion.div>
    </section>
  );
}

export default Intro;