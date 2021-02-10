import React from "react";

import { Container } from "./styles/signup";

export default function SignUp({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
