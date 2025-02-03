import { Outlet } from "react-router-dom";

import React from 'react'

const AdminHome = () => {
  return (
    <>
    <div id="adminHeader">
        <h1>Welcome to Admin Panel</h1>
        {/* <marquee behavior="slider" direction="left" scrollamount="12" >Admin Dashbaord</marquee> */}

    </div>

    <Outlet/>
    

    <div id="adminFooter">
        www.myEcommerce.com

    </div>

    </>
  )
}

export default AdminHome