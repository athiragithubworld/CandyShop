import React , {useState, useContext} from "react";

import CartContext from "../store/CartContext";

const CandyShop = (props) => {

    const cartcntx = useContext(CartContext);

    const [candyName , setCandyName] =useState("")
    const [description , setDescription] =useState("")
    const [price , setPrice] =useState("")
    
    const [candyList , setcandyList] =useState([])

    // console.log("Productlist",productList)
    const CandyNameHandler = (event)=>{
        setCandyName(event.target.value)
    }

    const DescriptionHandler = (event)=>{
        setDescription(event.target.value)
    }
    const PriceHandler = (event)=>{
        setPrice(event.target.value)
    }

    const AddProductHandler = (event) =>{

        event.preventDefault();

        if(candyName==="" || description==="" || price==="" )
        {
            alert("Please enter valid data")
            return;
        }

        setcandyList ((prevList) =>{
            const CandyItems = [...prevList , 
                {
                    id:Math.random().toString(),
                    candyName:candyName,
                    description:description,
                    price:price
                    // buyOne:0,
                    // buyTwo:0,
                    // buyThree:0
                    
                }]

                return CandyItems;

        })

        setCandyName("");
        setDescription("");
        setPrice("");

    }

    const BuyOneHandler = (item) => {
        console.log("candy",item);
        cartcntx.addProduct({...item ,buyOne:1,buyTwo:0,buyThree:0, quantity:1})
        console.log("candy2",item);
    }
    const BuyTwoHandler = (item) => {
        cartcntx.addProduct({...item ,buyOne:0,buyTwo:2,buyThree:0, quantity:2})
    }
    const BuyThreeHandler = (item) => {
        cartcntx.addProduct({...item ,buyOne:0,buyTwo:0,buyThree:3, quantity:3})
    }


  return (
    <div>
      <form>
        <label>Candy Name </label>
        <input
          type="text"
          value={candyName}
          onChange={CandyNameHandler}
        ></input>

        <label>Description </label>
        <input
          type="text"
          value={description}
          onChange={DescriptionHandler}
        ></input>

        <label>Price </label>
        <input 
        type="number" 
        value={price} 
        onChange={PriceHandler}
        ></input>

        <button onClick={AddProductHandler}>Add Product</button>
      </form>

      <ul>

      {candyList.map((pitem) => {
                    return(<li style={{listStyle:"none"}} key={pitem.id}>
                        {pitem.candyName} - {pitem.description} -{pitem.price}
                        <button onClick={() => BuyOneHandler(pitem)}>Buy One </button>
                        <button onClick={() =>BuyTwoHandler(pitem)}>Buy Two </button>
                        <button onClick={() =>BuyThreeHandler(pitem)}>Buy Three</button>
                    </li>)
                })}

      </ul>

      <button onClick={props.onClick}>
        <span> Cart  </span>
        <span> - {cartcntx.candyList.reduce((a,v)=>(a=Number(a)+(Number(v.buyOne+v.buyTwo+v.buyThree))),0)} - </span>
      </button>
    </div>
  );
};

export default CandyShop;
