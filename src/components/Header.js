import { useState } from "react";
const Title = ()=>(
    <a href="/">
    <img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51Fg8ECaMCb6T2yAd4CgUjy_hu7Zk1OKEZw&s"/>
    </a>
)



const HeaderComponent = ()=>{
    const [loggedIn,  setloggedIn] = useState(true);
    function toggle(){
            setloggedIn(!loggedIn)
        
    }
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
            {loggedIn ? (<button onClick={toggle}>LogOut</button>) : (<button onClick={toggle}>LogIn</button>)}
            
        </div>
    );
}




export default HeaderComponent;