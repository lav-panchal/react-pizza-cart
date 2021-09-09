import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { useState, useEffect } from "react";
import Navigation from "./Components/Navigation";
import ProductsPage from "./Pages/ProductsPage";
import SingleProduct from "./Pages/SingleProduct";
import { CartContaxt } from "./CartContext";
function App() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <Router>
      <CartContaxt.Provider value={{ cart, setCart }}>
        <Navigation />

        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/products" exact component={ProductsPage}></Route>
          <Route path="/products/:_id" component={SingleProduct}></Route>
          <Route path="/cart" component={Cart}></Route>
        </Switch>
      </CartContaxt.Provider>
    </Router>
  );
}

export default App;
