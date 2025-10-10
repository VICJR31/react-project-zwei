import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [aiActive, setAiActive] = useState(false);

  const handleActivateAI = () => {
    setAiActive(true);
    // Play a greeting (replace this with 11Labs API or real voice later)
    const audio = new Audio('/audio/ai-greeting.mp3'); // put an mp3 in your public/audio folder
    audio.play();
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of your React project.</p>

      <button onClick={handleActivateAI}>Meet the AI</button>

      {aiActive && (
        <div style={{ marginTop: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
          <p>👤 AI: "Hey there, mate. Keep your eyes open. We’ve got work to do."</p>
        </div>
      )}

      <Link to="/quiz">
        <button style={{ marginTop: '1rem' }}>Start Quiz</button>
      </Link>
    </div>
  );
};

export default Home;
