import React from 'react';
import Calculator from './Calculator';
// import './App.css';

function App() {
  return (
    <div className="app">
      <main className="app-container">
        <div className="app-header">
          <h1>Simple Calculator</h1>
          <small>...A work in progress.</small>
        </div>
        <Calculator></Calculator>
      </main>
    </div>
  );
}

export default App;
