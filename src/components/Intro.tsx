import { motion, type Variants } from "framer-motion";

import Sparkles from "./Sparkles";
import "../styles/pixel-theme.css";
import "../styles/intro.css";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const line: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function Intro() {
  return (
    <section className="intro">
      <Sparkles count={12} />

      <motion.div
        className="intro-window pixel-panel"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="pixel-titlebar">
          <span>♥ NEW MESSAGE FROM: YOU</span>
          <div className="window-controls">
            <span className="win-btn">_</span>
            <span className="win-btn">□</span>
            <span className="win-btn win-close">×</span>
          </div>
        </div>

        <div className="intro-body">
          <motion.p className="line" variants={line}>
            {">"} Dear Rosie,
          </motion.p>

          <motion.p className="line" variants={line}>
            {">"} some days sparkle so loud you'd remember them anyway.
          </motion.p>

          <motion.p className="line highlight" variants={line}>
            {">"} it's the quiet ones i worry about losing.
          </motion.p>

          <motion.div className="divider" variants={line}>
            ▪ ▪ ▪
          </motion.div>

          <motion.p className="line" variants={line}>
            {">"} so i started catching them —
          </motion.p>

          <motion.p className="line highlight" variants={line}>
            {">"} the tiny, glittering nothings
          </motion.p>

          <motion.p className="line" variants={line}>
            {">"} and keeping them somewhere safe.
          </motion.p>

          <motion.div className="divider" variants={line}>
            ▪ ▪ ▪
          </motion.div>

          <motion.p className="line" variants={line}>
            {">"} the socks that never match.
          </motion.p>
          <motion.p className="line" variants={line}>
            {">"} the 2am voice notes.
          </motion.p>
          <motion.p className="line" variants={line}>
            {">"} the way you laugh before the joke's even finished.
          </motion.p>

          <motion.div className="divider" variants={line}>
            ▪ ▪ ▪
          </motion.div>

          <motion.p className="line" variants={line}>
            {">"} none of it would make a photo album.
          </motion.p>

          <motion.p className="line highlight" variants={line}>
            {">"} all of it makes you, you.
          </motion.p>

          <motion.h2 className="intro-title" variants={line}>
            welcome to your little pocket of magic.
          </motion.h2>
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;