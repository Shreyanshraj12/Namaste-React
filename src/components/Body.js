import { useState,useEffect } from "react";
import { ResturantList } from "../constants";
import  ResturantCard  from "./ResturantCard";


const filterData = (searchText, resturants) => {
    return resturants.filter((resturant) =>
      resturant.info.name.includes(searchText)
    );
  };
  


const Body = ()=>{
    const[resturants, setResturants] = useState(ResturantList);
    const [searchText, setSearchText] = useState("");
   

    useEffect(()=>{
      //Api Call
      getResturants();
     

    },[]);

    async function  getResturants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2585371&lng=82.06598579999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setResturants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    return(
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button className="search-btn" onClick={()=>{
            const data = filterData(searchText, resturants);
            setResturants(data);
           
            }}>Search</button>
        </div>



           
        <div className="resturant-list">
           
           {resturants.map((p)=>{
           return  <ResturantCard {...p.info} key={p.info.id} />
           })}
            
        </div>
        </>
    )
}

export default Body;