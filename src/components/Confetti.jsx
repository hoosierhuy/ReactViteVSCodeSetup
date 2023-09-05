import '../css/styles.css';

import ConfettiGenerator from 'confetti-js';

import { useEffect, useState } from 'react';

// This component is here only for demonstration purposes.
const ConfettiCanvas = () => {
  useEffect(() => {
    const confettiSettings = { target: 'confetti-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return <canvas id="confetti-canvas"></canvas>;
};

const ConfettiParty = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const toggleConfetti = () => setShowConfetti(!showConfetti);

  return (
    <div className="container" type="button">
      <button onClick={toggleConfetti}>
        {showConfetti ? 'Okay, Okay, Enough Already.' : "Let's Party!"}
      </button>
      {showConfetti && <ConfettiCanvas />}
    </div>
  );
};

export default ConfettiParty;
