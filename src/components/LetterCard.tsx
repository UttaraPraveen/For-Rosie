import { useState } from "react";

type LetterCardProps = {
  header: string;
  title: string;
  preview: string;
  content: string;
};

function LetterCard({
  header,
  title,
  preview,
  content,
}: LetterCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="letter-card">
      {!isOpen ? (
        <>
          <h2>{header}</h2>

          <h3>{title}</h3>

          <p>{preview}</p>

          <p className="sealed">
            Written just for you.
          </p>

          <button onClick={() => setIsOpen(true)}>
            Read when you're ready
          </button>
        </>
      ) : (
        <>
          <h2>{title}</h2>

          <div className="letter-paper">
            <p className="greeting">
              For Rosie,
            </p>

            <p>{content}</p>
          </div>

          <button onClick={() => setIsOpen(false)}>
            Fold it away
          </button>
        </>
      )}
    </div>
  );
}

export default LetterCard;