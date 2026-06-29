import { useState } from "react";
import type { Letter } from "../data/letters";

type Props = {
  letter: Letter;
};

function Envelope({ letter }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="envelope">
      {!isOpen ? (
        <>
          <h2>Age {letter.age}</h2>

          <h3>{letter.title}</h3>

          <p>{letter.preview}</p>

          <button onClick={() => setIsOpen(true)}>
            Open Letter
          </button>
        </>
      ) : (
        <>
          <h2>{letter.title}</h2>

          <div className="letter-paper">
            {letter.content}
          </div>

          <button onClick={() => setIsOpen(false)}>
            Close
          </button>
        </>
      )}
    </div>
  );
}

export default Envelope;