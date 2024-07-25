import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"

import { FormRow, Logo } from "../components"

const Register = () => {
  return (
   <Wrapper>
    <form className="form" >
   <Logo />
    <h4>Register</h4>
    
    <FormRow
    labelText="firstName"
    defaultValue="Karan"
    type="text"
    name="Fname"
    />

    <FormRow
    labelText="email"
    defaultValue="email@gmail.com"
    type="email"
    name="email"
    />

    <FormRow
    labelText="Address"
    defaultValue="location"
    type="text"
    name="Fname"
    />

    <FormRow
    labelText="Password"
    defaultValue=""
    type="password"
    name="password"
    />
    <button type="submit" className="btn btn-block">Submit</button>
    <p>Alreeady a user 
       <Link to="/login"  className="btn btn-member">Login</Link>
    </p>

    </form>
   </Wrapper>
  )
}
export default Register