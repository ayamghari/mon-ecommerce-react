import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "T-shirt Premium",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      category: "Vêtements",
      description: "T-shirt 100% coton",
    },
    {
      id: 2,
      name: "Jeans Slim",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      category: "Vêtements",
      description: "Jeans coupe slim",
    },
    {
      id: 3,
      name: "Sneakers Sport",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      category: "Chaussures",
      description: "Sneakers confortables",
    },
    {
      id: 4,
      name: "Sac à Dos",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      category: "Accessoires",
      description: "Sac à dos moderne",
    },
    {
      id: 5,
      name: "Montre Élégante",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400",
      category: "Accessoires",
      description: "Montre classique",
    },
    {
      id: 6,
      name: "Veste Casual",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
      category: "Vêtements",
      description: "Veste décontractée",
    },
  ];

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const value = {
    cart,
    products,
    addToCart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    getTotalItems,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
