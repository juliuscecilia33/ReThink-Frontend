import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { Heading, Icon, Menu, Link, Squiggle } from "./styles/burger";

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

Burger.Link = function BurgerLink({
  setOpen,
  open,
  to,
  children,
  ...restProps
}) {
  return (
    <ReactRouterLink onClick={() => setOpen(!open)} to={to}>
      <Link {...restProps}>{children}</Link>
    </ReactRouterLink>
  );
};

Burger.Squiggle = function BurgerSquiggle({ children, ...restProps }) {
  return (
    <Squiggle src="/images/Squiggle.png" alt="Logo" {...restProps}>
      {children}
    </Squiggle>
  );
};

// Burger.Socials = function BurgerSocials({ children, ...restProps }) {
//   return <Socials {...restProps}>{children}</Socials>;
// };
