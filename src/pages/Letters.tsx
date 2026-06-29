import LetterCard from "../components/LetterCard";
import { letters } from "../data/letters";
import "../styles/letters.css";

function Letters() {
  return (
    import PageLayout from "../components/PageLayout";

<PageLayout
  title="Letters for Every Age"
  subtitle="Some words are meant for the person you are today. Others are waiting patiently for the person you'll become."
>
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
</PageLayout>
  );
}

export default Letters;