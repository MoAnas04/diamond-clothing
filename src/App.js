import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route path="/shop" component={ShopPage} />
        {/* exact takes true or false and switch make sure that our browser displays only route which matches and nothing else*/}
      </Switch>
    </div>
  );
}

export default App;
