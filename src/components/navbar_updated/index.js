import React from "react";

import { Container, Title } from "./styles/signup";

export default function NavBar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

NavBar.Title = function NavBarTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
