import { useMemo } from "react";
import { motion } from "framer-motion";

import "../styles/pixel-theme.css";
import "../styles/navbar.css";

const GREETINGS = [
  "HI ROSIE! I'VE BEEN WAITING",
  "LOOK WHO'S HERE!!",
  "YOU FOUND ME AGAIN",
  "HEHE HI! MISSED YOU",
  "ROSIE!! MY FAVORITE PERSON",
  "OH HI!! PERFECT TIMING",
  "YOU'RE HERE! YAY",
  "GUESS WHO'S SO HAPPY RN",
  "HI HI HI!!",
  "THERE YOU ARE",
  "EEK HI! COME IN",
  "MY FAVORITE NOTIFICATION: YOU",
];

function Navbar() {
  const greeting = useMemo(
    () => GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
    []
  );

  return (
    <motion.nav
      className="navbar pixel-panel"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="pixel-titlebar">
        <span className="navbar-brand">✦ FOR-ROSIE.EXE</span>
        <div className="window-controls">
          <span className="win-btn">_</span>
          <span className="win-btn">□</span>
          <span className="win-btn win-close">×</span>
        </div>
      </div>

      <div className="navbar-greeting">
        <span className="navbar-heart">♥</span>
        <span className="navbar-marquee">{greeting}</span>
      </div>
    </motion.nav>
  );
}

export default Navbar;