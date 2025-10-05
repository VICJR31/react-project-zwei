import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/home.jsx';
import Quiz from './components/Quiz/Quiz';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}

export default App;

