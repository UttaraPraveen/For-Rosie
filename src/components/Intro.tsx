import { motion } from "framer-motion";

import "../styles/intro.css";

function Intro() {
  return (
    <section className="intro">
      <motion.div
        className="intro-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="line">
          Some days are unforgettable.
        </p>

        <p className="line">
          Most aren't.
        </p>

        <br />

        <p className="line">
          But somehow...
        </p>

        <p className="line highlight">
          those ordinary little moments
          <br />
          become the ones we miss the most.
        </p>

        <br />
        <br />

        <p className="line">
          This is for all of them.
        </p>

        <br />

        <p className="line">The tiny victories.</p>
        <p className="line">The sleepy mornings.</p>
        <p className="line">The silly conversations.</p>

        <br />

        <p className="line">
          The moments that never made it into photo albums...
        </p>

        <p className="line highlight">
          but deserved to live forever.
        </p>

        <br />
        <br />

        <h2>Welcome home.</h2>
      </motion.div>
    </section>
  );
}

export default Intro;