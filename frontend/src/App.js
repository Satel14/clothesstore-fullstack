import "./style/style.scss";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import CookieRule from "./components/CookieRule";
import CreateNotes from "./components/CreateNotes";
import Home from "./components/pages/Home";
import FAQ from "./components/pages/FAQ";
import Payment from "./components/Payment";
  function App() {
    const [sideToggle, setSideToggle] = useState(false);

    return (
      <div className="app">
        <Router>
          <Navbar click={() => setSideToggle(true)} />
          <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
          <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
          <main className="app">
            <Switch>
              <Route exact path="/" component={Home}>
              </Route>
              <Route exact path="/product" component={HomeScreen} >
              </Route>
              <Route exact path="/product/:id" component={ProductScreen}  >
              </Route>
              <Route exact path="/cart" component={CartScreen} >
              </Route>
              <Route exact path="/create" component={CreateNotes} >
              </Route>
              <Route exact path="/faq" component={FAQ} >
              </Route>
              <Route exact path="/payment" component={Payment} >
              </Route>
              <Route exact path='*'>
                <Home/>
              </Route>
            </Switch>
          </main>
          <CookieRule />
        </Router>
      </div>
    );
  }

export default App;
