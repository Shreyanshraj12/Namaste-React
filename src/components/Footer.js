import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = ()=>{
    const {user} = useContext(UserContext);
   
    return(
        <>
         <h4>Footer</h4>
         <h4>For better experience,download the Food Villa app now</h4>
         <h3>{user.name} - {user.email}</h3>
        </>
       
    )
}

export default Footer;