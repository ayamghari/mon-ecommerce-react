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
    // T-SHIRTS
    {
      id: 1,
      name: "T-shirt Blanc",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      category: "T-shirts",
      description: "Basique et confortable",
    },
    {
      id: 2,
      name: " T-shirt Original",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
      category: "T-shirts",
      description: "Style moderne",
    },
    {
      id: 3,
      name: "T-shirt Noir",
      price: 27.99,
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400",
      category: "T-shirts",
      description: "Élégant et polyvalent",
    },

    // PANTALONS
    {
      id: 4,
      name: "Jeans ",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      category: "Pantalons",
      description: "Coupe moderne",
    },
    {
      id: 5,
      name: "Pantalon Beige",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400",
      category: "Pantalons",
      description: "Chic et décontracté",
    },
    {
      id: 6,
      name: "Jeans BLue",
      price: 74.99,
      image:
        "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400",
      category: "Pantalons",
      description: "Style urbain",
    },

    // ROBES
    {
      id: 7,
      name: "Robe Longue rouge",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
      category: "Robes",
      description: "Parfaite pour l'été",
    },
    {
      id: 8,
      name: "Robe chic",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400",
      category: "Robes",
      description: "Élégance garantie",
    },
    {
      id: 9,
      name: "Robe Florale",
      price: 99.99,
      image:
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400",
      category: "Robes",
      description: "Bohème chic",
    },

    // CHAUSSURES
    {
      id: 10,
      name: "Baskets Beiges",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      category: "Chaussures",
      description: "Confort et style",
    },
    {
      id: 11,
      name: "Escarpins fleurs",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      category: "Chaussures",
      description: "Hauteur et élégance",
    },
    {
      id: 12,
      name: "Bottes Daim",
      price: 189.99,
      image:
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400",
      category: "Chaussures",
      description: "Tendance automne-hiver",
    },

    // SACS
    {
      id: 13,
      name: "Sac noir",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
      category: "Sacs",
      description: "Féminin et pratique",
    },
    {
      id: 14,
      name: "Sac  orange en cuir",
      price: 159.99,
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400",
      category: "Sacs",
      description: "Haute qualité",
    },
    {
      id: 15,
      name: "Sac à Dos",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      category: "Sacs",
      description: "Pratique et moderne",
    },

    // MONTRES
    {
      id: 16,
      name: "Montre Dorée",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400",
      category: "Montres",
      description: "Élégance intemporelle",
    },
    {
      id: 17,
      name: "Montre Sport",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      category: "Montres",
      description: "Performance et style",
    },
    {
      id: 18,
      name: "Montre Cuir",
      price: 169.99,
      image:
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400",
      category: "Montres",
      description: "Classique et raffinée",
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
