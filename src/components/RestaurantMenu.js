import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addIteam } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const RestaurantMenu = ()=>{
    const {id} = useParams();
    const restaurant = useRestaurant(id);
    const dispatch = useDispatch();

const handleAddIteam = ()=>{
    dispatch(addIteam("Grapes"));
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
                    <button onClick={()=> handleAddIteam()} className="bg-blue-600">addIteams</button>

                </>
            )}
        </div>
    );
    
}
export default RestaurantMenu;

