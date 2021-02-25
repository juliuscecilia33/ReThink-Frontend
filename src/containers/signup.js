import React from "react";
import { SignUp } from "../components";

export function SignUpContainer() {
  return (
    <>
      <SignUp>
        <SignUp.Slogan>
          Sign up <br />
          <span>with us, you'll like it here</span>
        </SignUp.Slogan>
        <SignUp.Description>
          Start by entering the name of your business
        </SignUp.Description>
        <SignUp.Inputs>
          <SignUp.Input placeholder="Name of business" />
          <SignUp.SecondaryInput placeholder="Address Line 1" />
          <SignUp.SecondaryInput placeholder="Address Line 2" />
          <SignUp.HalfInputs>
            <SignUp.HalfInput placeholder="City" />
            <SignUp.HalfInput placeholder="State" />
            <SignUp.HalfInput placeholder="Zip Code" />
          </SignUp.HalfInputs>
        </SignUp.Inputs>
        <SignUp.SecondaryDescription>
          Can we contact you?
        </SignUp.SecondaryDescription>
        <SignUp.Select />
        <SignUp.SecondaryDescription>
          How should we contact you?
        </SignUp.SecondaryDescription>
        <SignUp.Inputs>
          <SignUp.Input placeholder="Email Address" />
          <SignUp.HalfInputs>
            <SignUp.HalfInput placeholder="First Name" />
            <SignUp.HalfInput placeholder="Last Name" />
          </SignUp.HalfInputs>
        </SignUp.Inputs>
        <SignUp.LeafDots />
        <SignUp.Button>Next</SignUp.Button>
      </SignUp>
    </>
  );
}
