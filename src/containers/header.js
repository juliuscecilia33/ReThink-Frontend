import React, { useState } from "react";
import { Header, Burger } from "../components";
import * as ROUTES from "../constants/routes";

export function HeaderContainer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header>
        <Header.Title>SUB</Header.Title>
        <Burger open={open} setOpen={setOpen} />
        <Burger.Menu open={open} setOpen={setOpen}>
          <Burger.Heading>Hi there!</Burger.Heading>
          <Burger.Links>
            <Burger.Link open={open} setOpen={setOpen} to={ROUTES.SIGNUP}>
              Home
            </Burger.Link>
            <Burger.Link open={open} setOpen={setOpen} to={ROUTES.SIGNUP}>
              Find Businesses
            </Burger.Link>
            <Burger.Link open={open} setOpen={setOpen} to={ROUTES.SIGNUP}>
              About Us
            </Burger.Link>
            <Burger.Link open={open} setOpen={setOpen} to={ROUTES.SIGNUP}>
              Criteria
            </Burger.Link>
            <Burger.Link open={open} setOpen={setOpen} to={ROUTES.SIGNUP}>
              Meet The Team
            </Burger.Link>
            <Burger.Link open={open} setOpen={setOpen} to={ROUTES.SIGNUP}>
              Contact Us
            </Burger.Link>
            <Burger.Link open={open} setOpen={setOpen} to={ROUTES.SIGNUP}>
              Sign Up
            </Burger.Link>
          </Burger.Links>
          <Burger.Squiggle />
          <Burger.Socials>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fas fa-envelope"></i>
          </Burger.Socials>
        </Burger.Menu>
      </Header>
    </>
  );
}
