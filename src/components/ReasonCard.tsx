import type { Reason } from "../data/reasons";

type Props = {
  reason: Reason;
};

function ReasonCard({ reason }: Props) {
  return (
    <div className="reason-card">
      <h2>♡</h2>

      <p>{reason.reason}</p>
    </div>
  );
}

export default ReasonCard;