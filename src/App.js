import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constants";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "../src/utils/UserContext"
import {Provider} from "react-redux";
import store from "./utils/store";
const Instamart = lazy(()=> import("./components/Instamart")); 





const Applayout = ()=>{
    const [user, setUser] = useState({
        name: "Shreyansh",
        email : "shreyanshgupt12@gmail.com",
    })
    
    return(
        <Provider store = {store}>
        <UserContext.Provider value={{
            user: user,
            setUser: setUser
            }}>
        <HeaderComponent/>
        <Outlet/>
        <Footer/>
        </UserContext.Provider>
        
        </Provider>
    )
}



const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body user = {{
                    name: "Namaste React",
                    email: "shreyansh@gmail.com",
                }}/>,
            },
            {
                path: "/about",
                element: <About/>,
                children: [{
                    path: "profile",
                    element: <Profile/>,
                }]
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>
            },
            {
                path: "/instamart",
                element:(
                <Suspense fallback={<Shimmer/>}>
                    <Instamart/>
                </Suspense>
                    ),
            },
        ]
    }
])












const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);