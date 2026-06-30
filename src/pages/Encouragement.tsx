import { useState } from "react";
import { encouragements } from "../data/encouragement";

import "../styles/encouragement.css";

function Encouragement() {
  const [current, setCurrent] = useState(0);

  const nextNote = () => {
    const random = Math.floor(
      Math.random() * encouragements.length
    );

    setCurrent(random);
  };

  return (
    <main className="encouragement-page">
      <h1>A Jar of Encouragement</h1>

      <p>
        Whenever you need a little reminder,
        pick a note from the jar.
      </p>

      <div className="note">
        <p>{encouragements[current].message}</p>
      </div>

      <button onClick={nextNote}>
        Pick another note
      </button>
    </main>
  );
}

export default Encouragement;