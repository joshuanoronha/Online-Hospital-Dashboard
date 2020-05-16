import React from 'react';
import logo from './logo.svg';
import './App.css';
import HospitalCard from './components/HospitalCard';
function App() {
  const data = [
    1,2,3,4,5,5,6,775,858,48,548,9,10
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {data.map((object, i) => <HospitalCard  />)}
    </div>
  );
}

export default App;
