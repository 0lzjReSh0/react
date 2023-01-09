import './App.css';
import React, { useState } from "react";
import Navigation from './navigation';
import {Demo} from "./style";
import { Login } from "../src/components/Login";
import { Register } from "../src/components/Register";


function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
    
  );
}

export default App;
