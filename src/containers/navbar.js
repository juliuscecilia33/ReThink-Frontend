import React from "react";
import { Navbar } from "../components";

export function NavbarContainer() {
  return (
    <Navbar>
      <Navbar.Logo />

      <Navbar.Links>
        {/* <Navbar.Link to={ROUTES.HOME}>Home</Navbar.Link>
        <Navbar.Link to={ROUTES.BUSINESSES}>Find a Business</Navbar.Link>
        <Navbar.Link to={ROUTES.ABOUT}>About Us</Navbar.Link>
        <Navbar.Link to={ROUTES.CONTACT}>Contact Us</Navbar.Link> */}
      </Navbar.Links>

      {/* <Navbar.Promote to={ROUTES.PROMOTE} /> */}
    </Navbar>
  );
}
