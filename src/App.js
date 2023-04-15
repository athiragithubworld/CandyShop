import React,{useState} from "react";

import CandyCart from "./Components/CandyCart";
import CandyShop from "./Components/CandyShop";

import CartProvider from "./store/CartProvider";

function App() {

const [openCart ,setOpenCart] = useState(false)

const clickOpenCart = () =>{
  setOpenCart(true)
}

const closeCart = () =>{
  setOpenCart(false)
}

  return (
    <CartProvider>
      <CandyShop onClick={clickOpenCart}></CandyShop>
      {openCart && <CandyCart onClose={closeCart}></CandyCart>}
    </CartProvider>
  );
}

export default App;
