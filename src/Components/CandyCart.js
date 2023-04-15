import React,{useContext} from "react";
import classes from './CandyCart.module.css'

import CartContext from "../store/CartContext";


const CandyCart = (props) =>{

    const cartctx = useContext(CartContext);

    console.log("items",cartctx)

    let totalAmount = cartctx.candyList.reduce(
        (a, v) => (a = Number(a) + Number(v.price * v.quantity)),
        0
      );

      const cartItemAddHandler = (item) =>{
        // event.preventDefault();
        cartctx.addProduct({ ...item, quantity: 1 });
      }
    
      const cartItemRemoveHandler = (item) =>{
        // event.preventDefault();
        cartctx.removeProduct(item);
      }


    return(
        <div  className={classes.CartForm}>

            <ul className={classes["cart-items"]}>
                 <div>
        
                    {cartctx.candyList.map((item) => {
         
          
                    return(<li key={item.id}>
              
                    <h2>{item.candyName}</h2>

                    <div className={classes.summary}>
                        <span className={classes.price}>Price : ${item.price}</span>
                        <span className={classes.quantity}> x {item.quantity}</span>
              
                    </div>
                    <div className={classes.actions}>
                        <button onClick={() =>cartItemAddHandler(item)}>+</button>
                        <button onClick={() =>cartItemRemoveHandler(item)}>-</button>
                    </div>
                    <div style={{borderBottom:'1px solid #8a2b06'}}></div>
                </li>)
          
                 })}
                </div>
            </ul>

            <div className={classes.total}>
                <span>Total Amount : </span>
                <span>${totalAmount.toFixed(2)}</span>
                {/* <span>$ {cartcntx.PrdtList.reduce((a,v) => (a=Number(a)+(Number(v.price)*Number(v.quantityLarge+v.quantityMedium+v.quantitySmall))),0)} </span> */}
            </div>
            <div className={classes.button}>
                <button>Product Order</button>
                <button onClick={props.onClose}>Close</button>
            </div>

        </div>
    )
}

export default CandyCart;