import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navigation from "./Components/Navigation";
import ProductsPage from "./Pages/ProductsPage";

function App() {
  return (
    <>
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/products" component={ProductsPage}></Route>
          <Route path="/cart" component={Cart}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
