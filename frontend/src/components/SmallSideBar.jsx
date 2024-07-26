
import Wrapper from "../assets/wrappers/SmallSidebar"
import { UseDashboardContext } from "../pages/Dashboard";
import { Logo } from "./Logo";
import { FaTimes } from "react-icons/fa";
import links from "../utils/links.jsx";
import { NavLink } from "react-router-dom";

export const SmallSideBar = () => {
    //  const data=UseDashboardContext();
    //  console.log(data);
  return (
 
  <Wrapper>
  <div className="sidbar-conatiner show-sidebar">
    <div className="content">
     <button className="close-btn">
      <FaTimes />
     </button>
       <header>
        <Logo/>
       </header>
       <div className="nav-links" >
       {links.map((link)=>{
        const {text,path,icon}=link;

        return(
            <NavLink
            to={path}
            key={text}
            className="nav-link"
            >
                {icon}<span className="icon">
                    {text}</span>

            </NavLink>
            
                )
                })}

       </div>
    </div>

  </div>
  </Wrapper>
  )
}