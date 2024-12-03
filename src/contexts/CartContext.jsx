import React, {createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart,product]);
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(product => product.id !== productId));
    };

    const getTotalPrice = () => {
        return cart.reduce((total,product) => total + product.price, 0);
    };

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, getTotalPrice}}>
            {children}
        </CartContext.Provider>
    );
};