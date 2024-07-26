import Wrapper from "../assets/wrappers/Navbar";
import { Logo } from "./Logo";
import { FaAlignLeft } from "react-icons/fa";

export const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn">
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">toggle/logout</div>
      </div>
    </Wrapper>
  );
};