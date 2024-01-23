import Restcard from "./Restcard"
import Shimmer from "./Shimmercard"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineCheck from "./utilitise/useOnlineCheck"
const Body=() => {
    const[listofRestaurants,setlistofRestaurants]=useState([])
    const[filterlist,setfilterlist]=useState([])

    const[searchText,setsearchText] =useState(" ")

 useEffect(()=>{
     fetchdata();
 },[])

const fetchdata= async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1115144&lng=80.29619029999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

const json= await data.json();
console.log(json);
setlistofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setfilterlist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}
const onlinestatus=useOnlineCheck();
if(onlinestatus==false){
return <h1>Check your internet connection</h1>
}
else

    return  listofRestaurants?.length==0 ? <Shimmer/>:
     (
        <div className="Body">
            <div className="m-4 p-4">
               <input type="text"
                placeholder="search restaurents"
                className="border border-solid border-black"
                value={searchText}
                onChange={(e)=>{
                  setsearchText(e.target.value)
                  console.log("rendered")
                }}
                ></input>
               <button className="px-2 m-3 bg-gray-300 "
                onClick={()=>{
                 const filteredrest =listofRestaurants.filter(
                    (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                console.log(filteredrest)
                 setfilterlist(filteredrest);
               }}
               
               >search</button>
               <button 
               className="m-3 px-3 bg-gray-300 rounded-lg"
                onClick ={()=>{
                    const filteredlist = listofRestaurants. filter(
                        (rest) => rest.info.avgRating > 4.3
                        );
                        setfilterlist(filteredlist);
                        console.log(filteredlist)
                }}
               >Top rated restaurents</button>
            </div>
            <div className="flex flex-wrap ">
            {filterlist.map((rest)=>(
                <Link
                key={rest.info.id}
                to={"/restaurant/"+ rest.info.id }>
                <Restcard key={rest.info.id} resobj={rest} /></Link>
                

            ))}
            </div>
        </div>
    );
};
export default Body