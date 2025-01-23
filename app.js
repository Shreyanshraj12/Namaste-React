import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id: "heading"},"Hello World in React 🚀")
const Title = ()=>(
    <a href="/">
    <img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51Fg8ECaMCb6T2yAd4CgUjy_hu7Zk1OKEZw&s"/>
    </a>
)
const HeaderComponent = ()=>{
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const Body = ()=>{
    return(
        <h4>Body</h4>
    )
}


const Footer = ()=>{
    return(
        <h4>Footer</h4>
    )
}














const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);