import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Userlist from "./Userlist";


const RootLayout = () =>{
    return(
      <>
       <Navbar/>
        <Outlet/>
       <Footer/>
      </>
    )
}

export default RootLayout