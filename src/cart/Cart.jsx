import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, addItemToCart, decrementItemFromCart } =
    useContext(CartContext);

  return (
    <div className="container mx-auto">
      <p className="text-2xl text-center my-8">Cart Items</p>
      <Link to="/" className="text-sky-500">
        Home Page
      </Link>

      <div className="flex flex-col gap-4">
        {cart?.length > 0 ? (
          cart.map((product) => {
            const c = cart.find((i) => i.id === product.id);
            return (
              <div
                className="bg-white shadow-md rounded-md justify-between flex px-8 py-6"
                key={product.id}
              >
                <div>
                  <p>Name: {product.name}</p>
                  <span>Price: {product.price}</span>
                </div>

                <div>
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
                        onClick={() => addItemToCart(product)}
                      >
                        +1
                      </button>
                    </div>
                  ) : (
                    <button
                      className="bg-sky-500 rounded-md px-8 py-3 text-white"
                      onClick={() => addItemToCart(product)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div>No items in the cart...</div>
        )}
      </div>
    </div>
  );
}

export default Cart;
