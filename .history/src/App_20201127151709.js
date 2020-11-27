import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom'
// adding global styling 
import GlobalStyle from "./GlobalStyle";
// adding components
import Nav from './Components/Nav';
import Home from './Components/Home';
// importing works
import data from '../data'

function App() {
  const [works, setworks ] = useState(data());
  

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
