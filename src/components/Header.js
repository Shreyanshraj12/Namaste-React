import { useState } from "react";
import Logo from "../assets/img/Logo.png"
import { Link } from "react-router-dom";



const Title = ()=>(
    <a href="/">
    <img className="h-28 p-2" alt="logo" src={Logo}/>
    </a>
)



const HeaderComponent = ()=>{
    const [loggedIn,  setloggedIn] = useState(false);
    function toggle(){
        setloggedIn(!loggedIn)
    
    }
    
    return(
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <Title/>
            <div className="nav-items">
                <ul className="flex py-10">
                    
                <li className="px-2"><Link to="/">Home </Link></li>
                <li className="px-2"> <Link to="/about">About </Link></li>
                
                
                <li className="px-2"> <Link to="/contact"> Contact </Link></li>
                <li className="px-2">Cart</li>
                <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                </ul>
            </div>
            {loggedIn ? (<button onClick={toggle}>LogOut</button>) : (<button onClick={toggle}>LogIn</button>)}
            
        </div>
    );
}




export default HeaderComponent;