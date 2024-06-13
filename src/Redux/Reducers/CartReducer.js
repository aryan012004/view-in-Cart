
import {RECORD} from '../action'
const initialValue = {
    name:'Samsung',
    price:'20000'
}
console.log(initialValue)
 const CartReducer = (state=initialValue,action)=>{
    switch (action.type)
    {
        case RECORD:
            return{
                ...state,initialValue
            }
    }
 }

 export default CartReducer;