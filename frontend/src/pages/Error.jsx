import { Link, useRouteError } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage";
import notFound from "../assets/images/not-found.svg";
const Error = () => {
    const error =useRouteError();
    if(error.status===404){
  return (
   <Wrapper >
  <div>
      <img src={notFound} alt="not found" className="img main-img" />
     <h1>
    <span>Opps!</span> error page
    <p>we cant find the page you looking for</p>
    </h1>
    <p>{error.data}</p>
    <Link to="/"> back to home</Link>
  </div>
  
   </Wrapper>
  )}
  return(
    <>
    something went wrong
    </>
  )
}
export default Error