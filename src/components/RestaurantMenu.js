import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";


const RestaurantMenu = ()=>{
    const {id} = useParams();
    const[restaurant, setRestaurant] = useState(null);



    useEffect(()=>{
        getRestaurantInfo();

    },[]);

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2585371&lng=82.06598579999999&restaurantId="+ id);
        const json = await data.json();
        setRestaurant(json);
    }
     


    return (
        <div>
            {!restaurant ? (
                <Shimmer />
            ) : (
                <>
                    <h1>Restaurant Id: {id}</h1>
                    <h2>{restaurant?.data?.cards[2]?.card?.card?.info?.name}</h2>
                    <img
                        src={IMG_CDN_URL + restaurant?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId}
                        alt="Restaurant"
                    />
                    <p>{restaurant?.data?.cards[2]?.card?.card?.info?.areaName}</p>
                    <p>{restaurant?.data?.cards[2]?.card?.card?.info?.city}</p>
                    <p>{restaurant?.data?.cards[2]?.card?.card?.info?.avgRating} Star </p>

                </>
            )}
        </div>
    );
    
}
export default RestaurantMenu;

