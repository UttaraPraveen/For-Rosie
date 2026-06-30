import type { Star as StarType } from "../data/constellation";

type Props = {
  star: StarType;
  onClick: () => void;
};

function Star({ star, onClick }: Props) {
  return (
    <button
      className="star"
      style={{
        top: star.top,
        left: star.left,
      }}
      onClick={onClick}
    >
      ✦
    </button>
  );
}

export default Star;