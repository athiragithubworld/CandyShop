import React from "react";

const CartContext = React.createContext({
    candyList:[],
    totalPrice:0,
    addProduct:(product) => {},
    removeProduct:(product) => {}
    

})

export default CartContext;