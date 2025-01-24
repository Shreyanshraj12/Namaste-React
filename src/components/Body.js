import { useState,useEffect } from "react";
import { ResturantList } from "../constants";
import  ResturantCard  from "./ResturantCard";
import Shimmer from "./Shimmer";


const filterData = (searchText, allResturant) => {
    return allResturant.filter((resturant) =>
      resturant.info.name.toLowerCase().includes(searchText)
    );
  };
  


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
   
    return (allResturants.length === 0) ? <Shimmer/> :(
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button className="search-btn" onClick={()=>{
            const data = filterData(searchText, allResturants);
            setFilterResturants(data);
           
            }}>Search</button>
        </div>

 
         
        <div className="resturant-list">
          {filteredResturants.length === 0 ? (<h1>Sorry No Iteams Found 😢</h1>) :( 
           
           filteredResturants.map((p)=>(
             <ResturantCard {...p.info} key={p.info.id} />
            ))
          )}
            
        </div>
        </>
    )
}

export default Body;