import React, { createContext, useContext, useState } from 'react';

const GadgetContext = createContext();

export const useGadgetContext = () => {
  return useContext(GadgetContext);
};

export const GadgetProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);


  const addToCart = (product) => {

    if (!cart.some(item => item.product_id === product.product_id)) {
      setCart((prevCart) => [...prevCart, product]);

      setWishlist((prevWishlist) => prevWishlist.filter(item => item.product_id !== product.product_id));
    }
  };


  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product_id !== productId));
  };


  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };


  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.product_id !== productId));
  };


  const purchaseItems = () => {
    setCart([]); 
  };

  const sortCartByPrice = () => {
    setCart((prevCart) => [...prevCart].sort((a, b) => b.price - a.price));
  };

  return (
    <GadgetContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        purchaseItems,
        sortCartByPrice,
      }}
    >
      {children}
    </GadgetContext.Provider>
  );
};
