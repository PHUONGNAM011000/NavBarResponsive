import React from "react";
import {
  Nav,
  NavLink,
  NavText,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

import logo from "../../images/logo.svg";
import BillBoard from "../BillBoard";

const Navbar = () => {
  return (
    <>
      <BillBoard></BillBoard>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" />
          &nbsp;&nbsp;
          <NavText>eDoctor</NavText>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavLink to="/sign-up">Sign Up</NavLink>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
