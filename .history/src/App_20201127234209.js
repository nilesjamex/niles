import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom'
// adding global styling 
import GlobalStyle from "./GlobalStyle";
// adding components
import Nav from './Components/Nav';
import Home from './Components/Home';
import Works from './Components/Works'
// importing works
import data from './data'

function App() {
  const [works, setworks ] = useState(data());
  const [ work, setwork ] = useState(works[0])


  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/works">
      <Works />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
