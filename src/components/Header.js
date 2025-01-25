import { useState } from "react";
import Logo from "../assets/img/Logo.png"
import { Link } from "react-router-dom";



const Title = ()=>(
    <a href="/">
    <img className="logo" alt="logo" src={Logo}/>
    </a>
)



const HeaderComponent = ()=>{
    const [loggedIn,  setloggedIn] = useState(false);
    function toggle(){
        setloggedIn(!loggedIn)
    
    }
    
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    
                <li><Link to="/">Home </Link></li>
                <li> <Link to="/about">About </Link></li>
                
                
                <li> <Link to="/contact"> Contact </Link></li>
                <li>Cart</li>
                </ul>
            </div>
            {loggedIn ? (<button onClick={toggle}>LogOut</button>) : (<button onClick={toggle}>LogIn</button>)}
            
        </div>
    );
}




export default HeaderComponent;