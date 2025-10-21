import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const handleMeetAI = () => {
    const aiWidget = document.getElementById('ai-widget');
    if (aiWidget) {
      aiWidget.open(); // opens the widget UI

      // Optional: trigger its greeting immediately if your agent supports it
      // aiWidget.startConversation();
    } else {
      console.warn('AI widget not found.');
    }
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of your React project.</p>

      <button onClick={handleMeetAI}>Meet the AI</button>

      <Link to="/quiz">
        <button style={{ marginTop: '1rem' }}>Start Quiz</button>
      </Link>
    </div>
  );
};

export default Home;
