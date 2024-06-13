import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function Cart()
{
    let [count,setcount]= useState(1);
    // let CartInfo = useSelector()
    // let dispatch = useDispatch();

     let getdata= ()=>{
        // dispatch(getdata(state.initialValue))
     }

   
return(
    <div>
            <img src={require('../image/1.jpg')}style={{height:'250px',width:'300px'}}></img>
             <h2>Samsung</h2> 
             <h3>INR 144444</h3>
             
             <button onClick={()=> setcount(count>1?--count:'1')}>-</button>
             <button onClick={()=> getdata()}>Add To Cart : {count}</button>
             <button onClick={()=> setcount(++count)} >+</button>

            
        </div>
    )
}

export default Cart;