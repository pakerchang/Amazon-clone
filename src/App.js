import React from 'react';
import './App.css';
import Header from "./Header.js";
import './firebase.js'
import Home from "./Home";


function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
