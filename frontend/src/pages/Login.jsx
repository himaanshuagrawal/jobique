import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { FormRow, Logo } from "../components"
const Login = () => {
  return (
   <>
  <Wrapper>
    <form className="form" >
   <Logo />
    <h4>Login</h4>
    
     <FormRow
    labelText="email"
    defaultValue="email@gmail.com"
    type="email"
    name="email"
    />
   
   <FormRow
    labelText="Password"
    defaultValue="000000"
    type="password"
    name="password"
    />
   <button type="submit" className="btn btn-block">Login</button>
   <button type="button" className="btn btn-block">Explore the app</button>
    <p>New user
      <Link to="/register"  className="btn-member">Register</Link>
    </p>
     </form>
     </Wrapper>

   </>
  )
}
export default Login