import React from "react";

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

SignUp2.SecondaryDescription = function SignUp2SecondaryDescription({
  children,
  ...restProps
}) {
  return <SecondaryDescription {...restProps}>{children}</SecondaryDescription>;
};

SignUp2.HalfInputs = function SignUp2HalfInputs({
  placeholder,
  children,
  ...restProps
}) {
  return <HalfInputs {...restProps}>{children}</HalfInputs>;
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
      <input placeholder={placeholder}></input>
    </Input>
  );
};

SignUp2.SecondaryInput = function SignUp2SecondaryInput({
  placeholder,
  children,
  ...restProps
}) {
  return (
    <SecondaryInput {...restProps}>
      <input placeholder={placeholder}></input>
    </SecondaryInput>
  );
};

SignUp2.HalfInput = function SignUp2HalfInput({
  placeholder,
  children,
  ...restProps
}) {
  return (
    <HalfInput {...restProps}>
      <input placeholder={placeholder}></input>
    </HalfInput>
  );
};

SignUp2.LeafDots = function SignUp2LeafDots({ children, ...restProps }) {
  return (
    <LeafDots {...restProps}>
      <img src="/images/LeafandDots.png" alt="LeafAndDots" />
    </LeafDots>
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

SignUp2.Button = function SignUp2Button({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
