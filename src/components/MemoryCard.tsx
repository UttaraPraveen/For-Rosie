import type { LittleThing } from "../data/littleThings";

type Props = {
  memory: LittleThing;
};

function MemoryCard({ memory }: Props) {
  return (
    <div className="memory-card">
      <h2>{memory.title}</h2>

      <p>{memory.description}</p>
    </div>
  );
}

export default MemoryCard;