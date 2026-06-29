import LetterCard from "../components/LetterCard";
import { openWhenLetters } from "../data/openWhen";

import "../styles/letters.css";

function OpenWhen() {
  return (
    <main className="letters-page">
      <h1>Open When...</h1>

      <p>
        Some words are meant for moments
        you can't prepare for.
        <br />
        Take whichever one you need today.
      </p>

      <div className="letters-grid">
        {openWhenLetters.map((letter) => (
          <LetterCard
            key={letter.id}
            header="Sealed Letter"
            title={letter.title}
            preview={letter.preview}
            content={letter.content}
          />
        ))}
      </div>
    </main>
  );
}

export default OpenWhen;