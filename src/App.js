import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Welcome to my portfolio!</p>
        </section>
        <section>
          <h2>Projects</h2>
          {/* Add your projects here */}
        </section>
        <section>
          <h2>Contact</h2>
          {/* Add your contact information here */}
        </section>
      </main>
    </div>
  );
}

export default App;