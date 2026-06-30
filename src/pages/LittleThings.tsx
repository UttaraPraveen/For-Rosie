import MemoryCard from "../components/MemoryCard";
import { littleThings } from "../data/littleThings";

import "../styles/littleThings.css";

function LittleThings() {
  return (
    <main className="little-things-page">
      <h1>The Little Things</h1>

      <p>
        The tiny moments that could have been forgotten...
        but never will be.
      </p>

      <div className="memory-list">
        {littleThings.map((memory) => (
          <MemoryCard
            key={memory.id}
            memory={memory}
          />
        ))}
      </div>
    </main>
  );
}

export default LittleThings;