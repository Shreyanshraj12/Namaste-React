import { Outlet } from "react-router-dom";
import Profile from "./Profile";
const About = ()=>{
    return(
        <div>
          <Profile/>
            <h1>About Us Page</h1>
            <p>Welcome To The Food Villa </p>
        </div>
    )
}

export default About;