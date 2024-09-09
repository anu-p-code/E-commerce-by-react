import React, { createContext, useState } from 'react';

// Create a context object
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
    const [allProducts, setAllProducts] = useState([]);

    // Example functions for managing cart items and products
    // You may need to define these based on your requirements
    const getTotalCartAmount = () => {
        return Object.keys(cartItems).reduce((total, itemId) => {
            const item = allProducts.find(p => p.id === itemId);
            return total + (item ? item.new_price * cartItems[itemId] : 0);
        }, 0);
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevCartItems => {
            const updatedCartItems = { ...prevCartItems };
            delete updatedCartItems[itemId];
            return updatedCartItems;
        });
    };

    return (
        <ShopContext.Provider value={{ cartItems, allProducts, setCartItems, setAllProducts, getTotalCartAmount, removeFromCart }}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
