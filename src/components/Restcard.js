import { CDN_URL } from "./utilitise/constants";

const Restcard =(props) =>{
    const {resobj}=props;
    return(
        <div className="bg-slate-200 w-[200px] p-4 m-4 h-[400px] hover:bg-slate-300 rounded-lg">
          <div className="p-[1px]  ">
             <img className="h-[160px] w-[200px] rounded-lg"
             src={CDN_URL+ resobj.info.cloudinaryImageId
              }
              />
          </div>
          <h3 className="font-semibold">{resobj.info.name}</h3>
          <h4 className="py-2">{resobj.info.cuisines.join(", ")}</h4>
          <h4 >⭐{resobj.info.avgRating}</h4>
           <h4>{resobj.info.sla.deliveryTime} minutes</h4>
        </div>

          

    )
}
export default Restcard