import { LOGO_URl } from "./utilitise/constants"
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import useOnlineCheck from "./utilitise/useOnlineCheck";
import Usercontext from "./utilitise/usercontext";
import { useSelector } from "react-redux";


const Header=() =>{

const [btnNameReact,setbtnNameReact]=useState("login");

const onlinestatus=useOnlineCheck();
const {loggedInuser}= useContext(Usercontext)

const cartItems = useSelector((store)=> store.cart.items)
console.log(cartItems);
    return (
        <div className="flex  justify-between shadow-xl">
            <div className=" w-28">
               <img src={LOGO_URl}></img>
             
            </div> 
            <div className="flex items-center font-semibold text-black font-sans" >
               
                <ul className="flex p-4 m-4 ">
                <li className="px-4 ">onlinestatus:{onlinestatus ?"🟢":"🔴" }</li>
                  <li className="px-4   text-black hover:text-red-600  rounded-lg ">
                    <Link to="/">Home</Link></li>
                  <li className="px-4  text-black hover:text-red-600   rounded-lg ">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="px-4  text-black hover:text-red-600   rounded-lg ">
                    <Link to="/Contactus">Contact Us</Link>
                  </li>
                  <li className="px-4  text-black hover:text-red-600 rounded-lg ">
                    <Link to="/Cart">cart-({cartItems.length})</Link>
                    </li>
                  
                  <button className="text-black  hover:text-red-600  rounded-md px-4"
                  onClick={
                    ()=>  { 
                        btnNameReact=="login"?
                        setbtnNameReact("logout"):
                        setbtnNameReact("login")
                  }
                  
                  }>{btnNameReact}</button>
                  <li className="px-2 ">{loggedInuser}</li>
                </ul>
           
                
                
            
            </div>

        </div>
    )
}
export default Header