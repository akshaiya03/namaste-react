import { useState } from "react";
import ItemCards from "./ItemCards";
const ResCategory=({data,showless,setshowIndex,showIndex})=>{

    

    const handleclick=(index)=>{
        if (showIndex==index){
            return setshowIndex(null);
          
        }
       setshowIndex();
    };
    return(
        

       <div className=" w-6/12 mx-auto  "> 
            <div className=" bg-gray-100 flex justify-between  shadow-lg border-b-2 p-4 m-4"onClick={handleclick}>
                <span className="font-semibold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            <div className=" px-4">
                {showless && <ItemCards item={data.itemCards}/>}
            </div>
       </div> 
    )
}
export default ResCategory;