import Envelope from "../components/Envelope";
import { letters } from "../data/letters";
import "../styles/letters.css";

function Letters() {
  return (
    <main className="letters-page">
      <h1>Letters for Every Age</h1>

      <p>
        Some words are meant for the person you are today.
        Others are waiting patiently for the person you'll
        become.
      </p>

      <div className="letters-grid">
        {letters.map((letter) => (
          <Envelope
            key={letter.id}
            letter={letter}
          />
        ))}
      </div>
    </main>
  );
}

export default Letters;