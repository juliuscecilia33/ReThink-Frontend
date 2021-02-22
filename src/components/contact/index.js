import React from "react";

import {
  Container,
  Slogan,
  Inputs,
  MessageInput,
  Input,
  Label,
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
      <img src="/images/TallPlant.png" alt="TallPlant" />
      {children}
    </Inputs>
  );
};

Contact.Input = function ContactInput({ placeholder, children, ...restProps }) {
  return (
    <Input {...restProps}>
      <Label>{children}</Label>
      <input placeholder={placeholder}></input>
      <img src="/images/CirclePattern.png" alt="Circle Pattern" />
    </Input>
  );
};

Contact.MessageInput = function ContactMessageInput({
  placeholder,
  children,
  ...restProps
}) {
  return (
    <MessageInput {...restProps}>
      <Label>{children}</Label>
      <input placeholder={placeholder}></input>
      <img src="/images/CirclePattern.png" alt="Circle Pattern" />
    </MessageInput>
  );
};
