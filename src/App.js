import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constants";



const Applayout = ()=>{
    return(
        <>
 
        <HeaderComponent/>
        <Body/>
        <Footer/>
        
        </>
    )
}





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);