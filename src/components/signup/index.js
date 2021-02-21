import React from "react";

import {
  Container,
  Slogan,
  Description,
  Input,
  LeafDots,
} from "./styles/signup";

export default function SignUp({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SignUp.Slogan = function SignUpSlogan({ children, ...restProps }) {
  return <Slogan {...restProps}>{children}</Slogan>;
};

SignUp.Description = function SignUpDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

SignUp.Input = function SignUpInput({ children, ...restProps }) {
  return (
    <Input {...restProps}>
      <input placeholder="Name of business"></input>
    </Input>
  );
};

SignUp.LeafDots = function SignUpLeafDots({ children, ...restProps }) {
  return (
    <LeafDots {...restProps}>
      <img src="/images/LeafandDots.png" alt="LeafAndDots" />
    </LeafDots>
  );
};
