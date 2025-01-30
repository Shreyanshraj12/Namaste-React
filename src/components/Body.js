import { useState,useEffect } from "react";
import { ResturantList } from "../constants";
import  ResturantCard  from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";



const Body = ()=>{
  const[allResturants, setAllResturants] = useState([]);
    const[filteredResturants, setFilterResturants] = useState([]);
    const [searchText, setSearchText] = useState("");
   

    useEffect(()=>{
      //Api Call
      getResturants();
     

    },[]);

    async function  getResturants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2585371&lng=82.06598579999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  
    const json = await data.json();
    setAllResturants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterResturants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
  
    const online = useOnline();
    if(!online){
      return <h1>😫 Offline, please check your internet connection!!</h1>
    }




    return (allResturants?.length === 0) ? <Shimmer/> :(
        <>
        <div className="p-5 bg-pink-50 my-5">
            <input type="text" className="focus:bg-orange-100 p-2 m-2 " placeholder="Search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-lg" onClick={()=>{
            const data = filterData(searchText, allResturants);
            setFilterResturants(data);
           
            }}>Search</button>
        </div>

 
         
        <div className="flex flex-wrap">
          {filteredResturants?.length === 0 ? (<h1>Sorry No Iteams Found 😢</h1>) :( 
           
           filteredResturants?.map((p)=>(
           <Link to={"/restaurant/" + p.info.id} key={p.info.id} > <ResturantCard {...p.info} /></Link> 
            ))
          )}
            
        </div>
        </>
    )
}


export default Body;