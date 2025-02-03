import { IMG_CDN_URL } from "../constants";
 const ResturantCard = ({cloudinaryImageId,name,cuisines,sla,user})=>{
    return(
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            <img src={IMG_CDN_URL + cloudinaryImageId}/>
             <h2 className="font-bold text-xl">{name}</h2>
             <h3>{cuisines.join(" , ")}</h3> 
              <h4>{sla.lastMileTravel} minutes</h4>
              <h4>{user.name}</h4>
            
        </div>
    )
}
export default ResturantCard;
