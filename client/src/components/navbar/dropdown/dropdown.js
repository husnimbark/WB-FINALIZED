// dependencies
import React, { useContext } from "react";
import { NavDropdown } from "react-bootstrap";
import { UserContext } from "../../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

// files
import Photo from "../../../assets/Ellipse 1.png";
import Profile from "../../../assets/user 2.svg";
import AddProduct from "../../../assets/AddProduct.svg";
import AddToping from "../../../assets/topping 1.svg";
import Logout from "../../../assets/logout 1.png";

export default function Dropdown() {
  // logout
  const [state, dispatch] = useContext(UserContext);
  const status = state.user.status;
  const navigate = useNavigate();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  return (
    <NavDropdown
      title={<img src={Photo} alt="photoProfile" className="navbarPhoto" />}
      className="navImg"
    >
      <NavDropdown.Item
        className={state.user.status === "admin" ? "fd" : "customer"}
      >
        <Link to="/profile" className="navbarItem navbarProfile">
          <img src={Profile} alt="profile" className="d-flex dropdown-img" />
          <p className="d-flex mb-0 dropCust tagProfile">Profile</p>
        </Link>
      </NavDropdown.Item>

      <NavDropdown.Item
        className={state.user.status === "admin" ? "mb-2 mt-2 ps-3" : "fd"}
      >
        <Link to="/add-product" className="navbarItem">
          <img
            src={AddProduct}
            alt="AddProduct"
            className="d-flex dropdown-img"
          />
          <p className="d-flex mb-0 ps-3 dropAdmin">AddProduct</p>
        </Link>
      </NavDropdown.Item>

      <NavDropdown.Item
        className={state.user.status === "admin" ? "mb-2 mt-2 ps-3" : "fd"}
      >
        <Link to="/add-toping" className="navbarItem">
          <img
            src={AddToping}
            alt="AddToping"
            className="d-flex dropdown-img navAddTopping"
          />
          <p className="d-flex ps-3 mb-0 dropAdmin ">AddToping</p>
        </Link>
      </NavDropdown.Item>
      <hr />
      <NavDropdown.Item onClick={logout}>
        <img src={Logout} alt="logout" className="d-flex dropdown-img" />
        <p className="d-flex mb-0 dropCust pe-4">Logout</p>
      </NavDropdown.Item>
    </NavDropdown>
  );
}
