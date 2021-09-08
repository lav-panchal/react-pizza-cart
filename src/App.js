import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navigation from "./Components/Navigation";
import ProductsPage from "./Pages/ProductsPage";
import SingleProduct from "./Pages/SingleProduct";

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/products" exact component={ProductsPage}></Route>
        <Route path="/products/:_id" component={SingleProduct}></Route>
        <Route path="/cart" component={Cart}></Route>
      </Switch>
    </Router>
  );
}

export default App;
