import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authRef } from "../firebase";
import { Context } from "../context/context";

export const Navbar = () => {
  const logOutUser = () => {
    authRef.signOut();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Mikro-F
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 align-items-center">
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/about-us"
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/account"
            >
              Account
            </NavLink>
          </li>
          <React.Fragment>
            <li className="nav-item ml-auto">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/users"
              >
                My Profile
              </NavLink>
            </li>
            <button type="button" className="btn btn-dark" onClick={logOutUser}>
              LogOut
            </button>
          </React.Fragment>
        </ul>
      </div>
    </nav>
  );
};
