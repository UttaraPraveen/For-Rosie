import ReasonCard from "../components/ReasonCard";
import { reasons } from "../data/reasons";

import "../styles/reasons.css";

function Reasons() {
  return (
    <main className="reasons-page">
      <h1>Reasons I Love You</h1>

      <p>
        Some reasons are loud.
        <br />
        Most are wonderfully quiet.
      </p>

      <div className="reasons-grid">
        {reasons.map((reason) => (
          <ReasonCard
            key={reason.id}
            reason={reason}
          />
        ))}
      </div>
    </main>
  );
}

export default Reasons;