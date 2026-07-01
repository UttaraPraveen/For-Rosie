import { useState, useEffect, useRef } from "react";
import { stars, type Star as StarType } from "../data/constellation";
import "../styles/constellation.css";

// 1. Inlined and renamed to MemoryStar to avoid conflicts with your existing Star.tsx
type MemoryStarProps = {
  star: StarType;
  onClick: () => void;
  mousePos: { x: number; y: number };
};

const MemoryStar = ({ star, onClick, mousePos }: MemoryStarProps) => {
  const starRef = useRef<HTMLButtonElement>(null);
  const [scale, setScale] = useState(1);
  const [glow, setGlow] = useState(0);

  useEffect(() => {
    if (starRef.current) {
      // Calculate star's exact position on the screen
      const rect = starRef.current.getBoundingClientRect();
      const starX = rect.left + rect.width / 2;
      const starY = rect.top + rect.height / 2;
      
      // Measure distance to the mouse pointer
      const distance = Math.hypot(mousePos.x - starX, mousePos.y - starY);
      const maxDist = 200; // Activation radius in pixels

      if (distance < maxDist) {
        const intensity = 1 - distance / maxDist;
        setScale(1 + intensity * 1.8); 
        setGlow(intensity);
      } else {
        setScale(1);
        setGlow(0);
      }
    }
  }, [mousePos]);

  return (
    <button
      ref={starRef}
      className="memory-star"
      style={{
        top: star.top,
        left: star.left,
        transform: `scale(${scale})`,
        boxShadow: `0 0 ${10 + glow * 40}px ${2 + glow * 15}px rgba(180, 220, 255, ${0.4 + glow * 0.6})`,
        backgroundColor: `rgba(255, 255, 255, ${0.7 + glow * 0.3})`,
      }}
      onClick={onClick}
    />
  );
};

// 2. The main page component
function Constellation() {
  const [selectedMessage, setSelectedMessage] = useState(
    "Click on a star to reveal a memory."
  );
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="constellation-page">
      <div className="space-dust"></div>

      <header className="header-content">
        <h1>A Constellation Sky</h1>
        <p>
          Every star holds a memory.
          <br />
          Find them one by one.
        </p>
      </header>

      <div className="sky">
        {stars.map((star) => (
          <MemoryStar
            key={star.id}
            star={star}
            mousePos={mousePos}
            onClick={() => setSelectedMessage(star.message)}
          />
        ))}
      </div>

      <div className="message-box">
        {/* The key prop re-triggers the fade-in animation on text change */}
        <p key={selectedMessage}>{selectedMessage}</p>
      </div>
    </main>
  );
}

export default Constellation;