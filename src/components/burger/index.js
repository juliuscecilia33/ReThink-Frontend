import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Heading,
  Icon,
  Menu,
  Link,
  Squiggle,
  Socials,
  Links,
} from "./styles/burger";

export default function Burger({ open, setOpen, children, ...restProps }) {
  return (
    <Icon open={open} onClick={() => setOpen(!open)} {...restProps}>
      <div />
      <div />
      <div />
    </Icon>
  );
}

Burger.Menu = function BurgerMenu({ open, children, ...restProps }) {
  return (
    <Menu open={open} {...restProps}>
      {children}
    </Menu>
  );
};

Burger.Heading = function BurgerHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Burger.Links = function BurgerLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

Burger.Link = function BurgerLink({
  setOpen,
  open,
  to,
  children,
  ...restProps
}) {
  return (
    <ReactRouterLink onClick={() => setOpen(!open)} to={to}>
      <Link {...restProps}>
        <img src="/images/Arrow.png" alt="Arrow" />
        <h2>{children}</h2>
      </Link>
    </ReactRouterLink>
  );
};

Burger.Squiggle = function BurgerSquiggle({ children, ...restProps }) {
  return (
    <Squiggle {...restProps}>
      <img src="/images/Squiggle.png" alt="Logo" />
    </Squiggle>
  );
};

Burger.Socials = function BurgerSocials({ children, ...restProps }) {
  return <Socials {...restProps}>{children}</Socials>;
};
