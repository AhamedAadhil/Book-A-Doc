import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets/assets_frontend/assets";

const NavBar = () => {
  return (
    <div>
      <img src={assets.logo} alt="logo" />
      <ul>
        <NavLink>
          <li>HOME</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>ALL DOCTORS</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>ABOUT</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>CONTACT</li>
          <hr />
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
