import ItemCards from "./ItemCards";
import { useDispatch, useSelector } from "react-redux";
import { emptyitems } from "./utilitise/cartSlice";

const Cart =()=>{

const cartItems = useSelector((store)=>store.cart.items)
const dispatch= useDispatch();
const handleclearcart= ()=> {
    dispatch(emptyitems());
};
    return(
        <div>
          <div className="text-center text-2xl p-4 m-4 ">
              Cart    
          </div>
           
          <div className=" w-6/12 m-auto">
            <ItemCards item ={cartItems} />
          </div>
          <div className="text-center p-4">
              <button className="p-2  bg-black rounded-lg text-white" 
              onClick={handleclearcart}>clearCart</button>
          </div>
          
        </div>  
    )
}
export default Cart;