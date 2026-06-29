import { motion } from "framer-motion";
import Keepsake from "./Keepsake";
import { keepsakes } from "../data/keepsake";

import "../styles/keepsakes.css";

function KeepsakeShelf() {
  return (
    <section className="shelf">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        These are for you.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Everything here was saved with love.
      </motion.p>

      <div className="shelf-grid">
        {keepsakes.map((item) => (
          <Keepsake
            key={item.id}
            keepsake={item}
          />
        ))}
      </div>
    </section>
  );
}

export default KeepsakeShelf;