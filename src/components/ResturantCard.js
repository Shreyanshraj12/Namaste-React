import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

 const ResturantCard = ({cloudinaryImageId,name,cuisines,sla})=>{
    const {user} = useContext(UserContext);

    return(
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            <img src={IMG_CDN_URL + cloudinaryImageId}/>
             <h2 className="font-bold text-xl">{name}</h2>
             <h3>{cuisines.join(" , ")}</h3> 
              <h4>{sla.lastMileTravel} minutes</h4>
             
              <h1>{user.name} - {user.email}</h1>
            
        </div>
    )
}
export default ResturantCard;
