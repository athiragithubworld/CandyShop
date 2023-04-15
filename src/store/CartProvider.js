import {useState} from "react";

import CartContext from "./CartContext";

const CartProvider = (props) =>{

    const [candyItems ,setcandyItems] = useState([])

    const addProductToCartHandler = (item) =>{
        let cartItems=[...candyItems];
        console.log("provitem",cartItems)
        let hasItem=false;
        cartItems.forEach((product) =>{
            if(product.id === item.id){
                hasItem=true;
                product.quantity = Number(product.quantity)+Number(item.quantity);
            }
        })

        if (hasItem){
            setcandyItems(cartItems);
        }
        else{
            setcandyItems((prevItems) =>{
                return[...prevItems , item]
            })
        }

    }

    const removeProductFromCartHandler = (item) =>{
        let cartitems =[...candyItems]
        cartitems.forEach((product) =>{
            if(product.id === item.id && item.quantity <=1){
                product.quantity=Number(product.quantity)-Number(item.quantity)

                if(product.quantity===0){
                    const updateList=cartitems.filter(pdt =>pdt.id !==product.id)
                    setcandyItems(updateList)
                }
            }

            if (product.id === item.id && item.quantity > 1) {
                product.quantity = Number(product.quantity) - 1;
                setcandyItems(cartitems);
              }



        }) 
    }

    const CartContexts = {
        
        candyList:candyItems,
        totalPrice:0,
        addProduct:addProductToCartHandler,
        removeProduct:removeProductFromCartHandler
      };

      return<CartContext.Provider value={CartContexts}>
            {props.children}
        </CartContext.Provider>

      

}

export default CartProvider;