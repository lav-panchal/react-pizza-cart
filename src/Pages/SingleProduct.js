import { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router";

import { CartContaxt } from "../CartContext";
const SingleProduct = () => {
  const { cart, setCart } = useContext(CartContaxt);
  const [isAdding, setIsAdding] = useState(false);
  const [product, setProducts] = useState([]);
  const params = useParams();
  const history = useHistory();
  const addToCart = (event, product) => {
    event.preventDefault();
    let _cart = { ...cart };
    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1;
    } else {
      _cart.items[product._id] = 1;
    }
    if (!_cart.total) {
      _cart.total = 0;
    }
    _cart.total += 1;
    setCart(_cart);
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };
  useEffect(() => {
    fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${params._id}`)
      .then((response) => response.json())
      .then((product) => {
        setProducts(product);
      });
  }, [params._id]);
  return (
    <div className="container mx-auto mt-12">
      <button
        className="mb-12 font-bold bg-yellow-200 hover:bg-yellow-400 rounded-full py-2 px-4"
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </button>
      <div className="flex">
        <img src={product.image} alt="pizza" />
        <div className="ml-16">
          <h1 className="font-bold text-xl">{product.name}</h1>
          <div className="text-md">{product.size}</div>
          <div className="font-bold mt-2">₹ {product.price}</div>
          <button
            onClick={(event) => {
              addToCart(event, product);
            }}
            className={`${
              isAdding ? "bg-green-500" : "bg-yellow-500 "
            } py-1 px-8 rounded-full font-bold hover:bg-yellow-600`}
          >
            Add{isAdding ? "ed" : ""} to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
