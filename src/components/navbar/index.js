import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { Container, Logo, Links, Link, Promote } from "./styles/navbar";

export default function Navbar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Navbar.Logo = function NavbarLogo({ to, children, ...restProps }) {
  return (
    <Logo {...restProps}>
      <img src="/images/TemporaryLogo.png" alt="" />
      <h3>SUB</h3>
    </Logo>
  );
};

Navbar.Links = function NavbarLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

Navbar.Link = function NavbarLink({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Link {...restProps}>{children}</Link>;
    </ReactRouterLink>
  );
};

Navbar.Promote = function NavbarPromote({ to, children, ...restProps }) {
  return (
    <Promote {...restProps}>
      <ReactRouterLink to={to}>
        <button>
          Promote Business <i class="fas fa-caret-right"></i>
        </button>
      </ReactRouterLink>
    </Promote>
  );
};
