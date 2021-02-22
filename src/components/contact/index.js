import React from "react";

import {
  Container,
  Slogan,
  Inputs,
  Input,
  Label,
  Plant,
  Dots,
} from "./styles/contact";

export default function Contact({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Contact.Slogan = function ContactSlogan({ children, ...restProps }) {
  return <Slogan {...restProps}>{children}</Slogan>;
};

Contact.Inputs = function ContactInputs({ children, ...restProps }) {
  return (
    <Inputs {...restProps}>
      <Plant>
        <img src="/images/TallPlant.png" alt="TallPlant" />
      </Plant>
      {children}
    </Inputs>
  );
};

Contact.Input = function ContactInput({ placeholder, children, ...restProps }) {
  return (
    <Input {...restProps}>
      <Label>{children}</Label>
      <input placeholder={placeholder}></input>
      <Dots>
        <img src="/images/CirclePattern.png" alt="Circle Pattern" />
      </Dots>
    </Input>
  );
};
