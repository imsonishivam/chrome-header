import React from "react";
import StyledComponent from "./StyledComponent";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="chrome_tab_container">
      <div class="chrome_tab_list">
        <StyledComponent to={"/"} name={"Home"} />

        <div className="chrome_tab active_tab">
          <div className="inner">
            <span className="border_left"></span>
            <span className="border_right"></span>
            <Link className="text" to={"/contact"}>
              Contact
            </Link>
          </div>
        </div>

        <StyledComponent to={"/service"} name={"service"} />
        <StyledComponent to={"/payment"} name={"Payment"} />
      </div>
    </div>
    // <div className="header-container">
    //   <div className="header">
    //     <Link to={"/"}>Home</Link>
    //     <Link to={"/contact"}>Contact</Link>
    //     <Link to={"/service"}>Service</Link>
    //   </div>
    // </div>
  );
};

export default Header;
