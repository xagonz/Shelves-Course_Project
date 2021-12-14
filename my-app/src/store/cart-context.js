import React from "react"; // we use this to call createContext

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;