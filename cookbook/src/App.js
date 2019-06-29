import React from 'react';
import Jumbotron from "./components/jumbotron/style";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Tasty recipes for every ingredient</h1>
      <Jumbotron/>
      {/* <Searchbar/> */}
      </header>
    </div>
  );
}

export default App;
