import React from "react"
// adding global styling 
import GlobalStyle from "./GlobalStyle"
// adding components
import Nav from './Components/Nav'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
    </div>
  );
}

export default App;
