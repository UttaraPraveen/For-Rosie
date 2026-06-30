import LetterCard from "../components/LetterCard";
import { letters } from "../data/letters";
import "../styles/letters.css";

function Letters() {
  return (
    <main className="letters-page">
      <h1>Letters for Every Age</h1>

      <p>
        Some words are meant for the person you are today.
        Others are waiting patiently for the person you&apos;ll
        become.
      </p>

      <div className="letters-grid">
        {letters.map((letter) => (
          <LetterCard
            key={letter.id}
            header={`Age ${letter.age}`}
            title={letter.title}
            preview={letter.preview}
            content={letter.content}
          />
        ))}
      </div>
    </main>
  );
}

export default Letters;