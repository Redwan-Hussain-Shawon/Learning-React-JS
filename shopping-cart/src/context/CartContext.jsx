import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saveCart = localStorage.getItem("cart");
    return saveCart ? JSON.parse(saveCart) : [];
  });

    // Add product
    const addToCart = (product) => {
        setCart((prev) => {
            const isExist = prev.find((item) => item.id === product.id);
            if (isExist){
                return prev.map((item) => item.id === product.id ? {...item,qty:item.qty+1} : item)
            }
            return [...prev,{...product,qty:1}]

            })
  }

  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])
  
  const removeCart = (id) => {
    setCart((prev) => prev.filter((item)=> item.id != id) )
  }

  const updateQty = (id, qty) => {
    setCart((prev) => prev.map((item) => (item.id == id ? { ...item, qty: qty } : item))
    );
  }

  const total = cart.reduce((sum,item)=> sum + item.price * item.qty,0)

    return (
      <CartContext.Provider
        value={{ cart, setCart, addToCart, removeCart, updateQty, total }}
      >
        {children}
      </CartContext.Provider>
    );
}


export  const useCart = () => useContext(CartContext); 