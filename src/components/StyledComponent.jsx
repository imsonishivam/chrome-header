import React from "react";
import { Link } from "react-router-dom";

const StyledComponent = ({ to, name }) => {
  return (
    <div className="chrome_tab">
      <div className="inner">
        <span className="border_left"></span>
        <span className="border_right"></span>
        <Link className="text" to={to}>
          {name}
        </Link>
      </div>
    </div>
  );
};

export default StyledComponent;
