import React from 'react';
import Timer from './components/Timer';
import './App.css'; 

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Pomodoro Timer</h1>
      <Timer />
    </div>
  );
}

export default App;