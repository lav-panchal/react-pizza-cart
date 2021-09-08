import { useState, useEffect } from "react";
import { useParams } from "react-router";

const SingleProduct = () => {
  const [product, setProducts] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${params._id}`)
      .then((response) => response.json())
      .then((product) => {
        setProducts(product);
      });
  }, []);
  return (
    <div className="container mx-auto mt-12">
      <button className="mb-12 font-bold">Back</button>
      <div className="flex">
        <img src={product.image} alt="pizza" />
        <div className="ml-16">
          <h1 className="font-bold text-xl">{product.name}</h1>
          <div className="text-md">{product.size}</div>
          <div className="font-bold mt-2">₹ {product.price}</div>
          <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
