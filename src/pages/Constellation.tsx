import { useState } from "react";

import Star from "../components/Star";
import { stars } from "../data/constellation";

import "../styles/constellation.css";

function Constellation() {
  const [selectedMessage, setSelectedMessage] = useState(
    "Click on a star to reveal a memory."
  );

  return (
    <main className="constellation-page">
      <h1>A Constellation Sky</h1>

      <p>
        Every star holds a memory.
        <br />
        Find them one by one.
      </p>

      <div className="sky">
        {stars.map((star) => (
          <Star
            key={star.id}
            star={star}
            onClick={() => setSelectedMessage(star.message)}
          />
        ))}
      </div>

      <div className="message-box">
        <p>{selectedMessage}</p>
      </div>
    </main>
  );
}

export default Constellation;