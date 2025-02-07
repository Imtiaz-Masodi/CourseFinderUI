import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

function HomePage() {
  const { cart, addItemToCart, decrementItemFromCart } =
    useContext(CartContext);

  const productsList = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 250 },
  ];

  const handleAddToCart = (product) => {
    addItemToCart(product);
  };

  return (
    <div className="container mx-auto">
      <p className="text-3xl text-center font-semibold my-12">Products List</p>
      <Link to="/cart" className="text-sky-500">
        Cart
      </Link>

      <div className="flex flex-row gap-6">
        {productsList.map((product) => {
          const c = cart?.find((i) => i.id === product.id);
          return (
            <div
              className="bg-white shadow-md rounded-md flex flex-col px-8 py-6"
              key={product.id}
            >
              <p>Name: {product.name}</p>
              <span>Price: {product.price}</span>

              {c && c.id ? (
                <div className="flex gap-4 items-center mt-4">
                  <button
                    className="bg-sky-500 rounded-md px-4 py-1 text-white"
                    onClick={() => decrementItemFromCart(product)}
                  >
                    -1
                  </button>
                  <p>{c.count}</p>
                  <button
                    className="bg-sky-500 rounded-md px-4 py-1 text-white"
                    onClick={() => handleAddToCart(product)}
                  >
                    +1
                  </button>
                </div>
              ) : (
                <button
                  className="bg-sky-500 rounded-md px-8 py-3 mt-4 text-white"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
