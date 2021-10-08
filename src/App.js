import './App.css';
import React from "react"
import SearchFood from './components/SearchFood';

function App() {
  return (
    <div className="App">
      <h1>Nom nom for us</h1>
      <p>Fetching food from...</p>
      <SearchFood />
    </div>
  );
}

export default App;
