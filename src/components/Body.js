import { useState } from "react";
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