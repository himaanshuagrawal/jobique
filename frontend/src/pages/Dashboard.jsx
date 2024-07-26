import { Outlet } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSideBar, Navbar, SmallSideBar } from "../components"
import { createContext, useContext, useState } from "react";


const DashboardContext=createContext();

 const Dashboard = () => {
   const user={name:"karan"};
   const [ShowSideBar,setShowSideBar]=useState(false);
   const [isDarkTheme,setDarkTheme]=useState(false);

   const toggleDarkTheme=()=>{
    setDarkTheme(!isDarkTheme);
    console.log("toogle theme")
   }

   const toggleShowSideBar=()=>{
    setShowSideBar(!ShowSideBar);
    console.log("toogle sidebar")
   }

   const logoutUser=async()=>{
    console.log("logout")
   }

  return (

<DashboardContext.Provider 
  value={{user ,ShowSideBar, isDarkTheme,toggleDarkTheme, toggleShowSideBar,logoutUser }}>
  <Wrapper>
  <main className="dashboard">
    <SmallSideBar/>
    <BigSideBar/>
    <div> 
       <Navbar/>
       <div>
        <Outlet className="dashboard-page"/>
       </div>
    </div>
  </main>
</Wrapper>
</DashboardContext.Provider>

  )
}
export default Dashboard;
export const UseDashboardContext=()=> useContext(DashboardContext)