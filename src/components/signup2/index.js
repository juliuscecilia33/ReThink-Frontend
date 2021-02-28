import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Container,
  Slogan,
  Description,
  SecondaryDescription,
  Inputs,
  Input,
  SecondaryInput,
  SecondaryInputs,
  InputsAndButton,
  HalfInputs,
  HalfInput,
  LeafDots,
  Select,
  Button,
} from "./styles/signup2";

export default function SignUp2({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SignUp2.Slogan = function SignUp2Slogan({ children, ...restProps }) {
  return (
    <Slogan {...restProps}>
      <h2>{children}</h2>
    </Slogan>
  );
};

SignUp2.Description = function SignUp2Description({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

SignUp2.Inputs = function SignUp2Inputs({
  placeholder,
  children,
  ...restProps
}) {
  return <Inputs {...restProps}>{children}</Inputs>;
};

SignUp2.InputsAndButton = function SignUp2InputsAndButton({
  placeholder,
  children,
  ...restProps
}) {
  return <InputsAndButton {...restProps}>{children}</InputsAndButton>;
};

SignUp2.SecondaryInputs = function SignUp2SecondaryInputs({
  placeholder,
  children,
  ...restProps
}) {
  return <SecondaryInputs {...restProps}>{children}</SecondaryInputs>;
};

SignUp2.Input = function SignUp2Input({ placeholder, children, ...restProps }) {
  return (
    <Input {...restProps}>
      <textarea placeholder={placeholder}></textarea>
    </Input>
  );
};

SignUp2.Select = function SignUp2Select({
  placeholder,
  children,
  ...restProps
}) {
  return (
    <Select {...restProps}>
      <select>
        <option value="0">Select:</option>
        <option value="1">Yes</option>
        <option value="2">No</option>
      </select>
    </Select>
  );
};

SignUp2.Button = function SignUp2Button({ to, children, ...restProps }) {
  return (
    <Button {...restProps}>
      <ReactRouterLink to={to}>
        <button>{children}</button>;
      </ReactRouterLink>
    </Button>
  );
};
