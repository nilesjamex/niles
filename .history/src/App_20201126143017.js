import React from "react";
import { Switch, Route } from 'react-router-dom'
// adding global styling 
import GlobalStyle from "./GlobalStyle";
// adding components
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
    </div>
  );
}

export default App;
