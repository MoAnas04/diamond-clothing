import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route path="/shop/hats" component={HatsPage} />
        {/* exact takes true or false and switch make sure that our browser displays only route which matches and nothing else*/}
      </Switch>
    </div>
  );
}

export default App;
