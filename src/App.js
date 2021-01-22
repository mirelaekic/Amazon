import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";

const routes = [{ path: "/", component: Home },
{path: "/product/:id", component:SingleProduct}];
function App() {
  return (
    <Router>
      <NavBar />
      {routes.map(({ path, component }) => (
        <Route exact path={path} component={component} />
      ))}
    </Router>
  );
}

export default App;
