'use client';
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // agregar item
  const addToCart = (item) => {
    let error = true;
    if (!isInCart(item.slug)) {
      setCart([...cart, item]);
      error = false;
      return error;
    }
  };

  //comprobar si esta en carro
  const isInCart = (slug) => {
    return cart.some((item) => item.slug === slug);
  };

  //cantidad total
  const totalQty = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  //cantidad total
  const totalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  //lipiar carrito
  const emptyCart = () => {
    setCart([]);
  };

  //quitar item
  const removeItem = (slug) => {
    const cartUpdated = cart.filter((item) => item.slug !== slug);
    setCart(cartUpdated);
  };
  return (
    <CartContext.Provider
      value={{
        addToCart,
        isInCart,
        totalQty,
        emptyCart,
        cart,
        totalPrice,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
