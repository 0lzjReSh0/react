import './App.css';
import React from "react"
import Navigation from './navigation';
import {Demo} from "./style";

function App() {
  return (
    <div className="App">
      <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/prop-types/prop-types.min.js"></script>
      <script src="https://unpkg.com/recharts/umd/Recharts.js"></script>
      <Navigation />
      <Demo>010400</Demo>
    </div>
    
  );
}

export default App;
