import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

function CartContextWrapper({ children }) {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index === -1) {
      item.count = 1;
      setCart([...cart, item]);
    } else {
      const updatedCart = [...cart];
      updatedCart[index].count += 1;
      setCart(updatedCart);
    }
  };

  const decrementItemFromCart = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index > -1) {
      let updatedCart = [...cart];
      if (cart[index].count > 1) {
        updatedCart[index].count -= 1;
      } else {
        updatedCart = updatedCart.filter((cartItem) => cartItem.id !== item.id);
      }
      setCart(updatedCart);
    }
  };

  useEffect(() => {
    if (cart?.length === 0) {
      const cachedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      if (cachedCart?.length > 0) {
        setCart(cachedCart);
      }
    }
  }, [cart, setCart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, decrementItemFromCart, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartContextWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContextWrapper;
