import { useMemo } from "react";
import { motion } from "framer-motion";

import "../styles/magic.css";
import "../styles/navbar.css";

const GREETINGS = [
  "Hi Rosie! I've been waiting 🎀",
  "Look who it is!! 💌",
  "You found me again ✨",
  "Hehe, hi! I missed you",
  "Rosie!! My favorite person",
  "Oh hi!! Perfect timing",
  "You're here! Yay!!",
  "Guess who's SO happy right now",
  "Hi hi hi!! 🌸",
  "There you are, I was hoping you'd come",
  "Eek, hi! Come in, come in",
  "My favorite notification: you",
];

function Navbar() {
  const greeting = useMemo(
    () => GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
    []
  );

  return (
    <motion.nav
      className="navbar glass-panel"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="navbar-brand shimmer-text">for rosie ✦</span>

      <motion.span
        className="navbar-greeting"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.span
          className="navbar-heart"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          💗
        </motion.span>
        {greeting}
      </motion.span>
    </motion.nav>
  );
}

export default Navbar;