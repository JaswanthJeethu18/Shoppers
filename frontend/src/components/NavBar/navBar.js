import React from "react";
import "./navBar.css";
import "../../common/common.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <div className="navBar">
      <nav>
        <div className="navBar__logo">
          <ShoppingCartIcon className="largeIcon" />
        </div>
        <ul className="navBar__links">
          <li className="active">
            <Link to="/api/v1/auth">SignIn</Link>
          </li>
          <li>
            <Link to="/api/v1/users">SignUp</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navBar;
