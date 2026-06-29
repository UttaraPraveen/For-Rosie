import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { KeepsakeData } from "../data/keepsakes";

type Props = {
  keepsake: KeepsakeData;
};

function Keepsake({ keepsake }: Props) {
  const icons: Record<string, string> = {
    envelope: "✉",
    flower: "🌸",
    heart: "♡",
    star: "✦",
    jar: "🫙",
    book: "📖",
  };

  const actions: Record<string, string> = {
    envelope: "Open the envelope →",
    flower: "Press the flower →",
    heart: "Read another reason →",
    star: "Look closer →",
    jar: "Pick a note →",
    book: "Untie the ribbon →",
  };

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
    >
      <Link to={keepsake.route} className="keepsake">
        <div className="icon">
          {icons[keepsake.type]}
        </div>

        <h3>{keepsake.title}</h3>

        <p>{keepsake.subtitle}</p>

        <span>
          {actions[keepsake.type]}
        </span>
      </Link>
    </motion.div>
  );
}

export default Keepsake;