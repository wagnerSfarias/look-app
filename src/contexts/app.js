import React, { createContext, useState } from 'react';

export const AppContext = createContext({});

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const DISCOUNT_PERCENTAGE = 0.1;
  const DELIVERY_TAX = 10;
  const ORDER_NUMBER = new Date().getTime();

  function addToCart(product) {
    const existentIndex = cart?.findIndex((p) => p.id === product.id);
    const oldCart = cart;

    if (existentIndex !== -1) {
      oldCart[existentIndex] = product;
    } else {
      oldCart.push(product);
    }
    setCart(oldCart);
  }
  function removeFromCart(productId) {
    const filteredProducts = cart?.filter((p) => p.id !== productId);
    setCart(filteredProducts);
  }

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        cart,
        addToCart,
        removeFromCart,
        DISCOUNT_PERCENTAGE,
        DELIVERY_TAX,
        ORDER_NUMBER
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
