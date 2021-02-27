import React, { useState } from "react";
import { SignUp } from "../components";
import * as ROUTES from "../constants/routes";

export function SignUpContainer() {
  return (
    <>
      <SignUp>
        <SignUp.Slogan>
          Sign up <br />
          <span>with us, you'll like it here</span>
        </SignUp.Slogan>
        <SignUp.Description>
          Start by entering details about your business
        </SignUp.Description>
        <SignUp.Inputs>
          <SignUp.Input placeholder="Name of business" />
          <SignUp.HalfInputs>
            <SignUp.HalfInput placeholder="Address Line 1" />
            <SignUp.HalfInput placeholder="Address Line 2" />
          </SignUp.HalfInputs>
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
        <SignUp.InputsAndButton>
          <SignUp.SecondaryInputs>
            <SignUp.Input placeholder="Email Address" />
            <SignUp.HalfInputs>
              <SignUp.HalfInput placeholder="First Name" />
              <SignUp.HalfInput placeholder="Last Name" />
            </SignUp.HalfInputs>
          </SignUp.SecondaryInputs>
          <SignUp.Button to={ROUTES.SIGNUP2}>Next</SignUp.Button>
        </SignUp.InputsAndButton>
        <SignUp.LeafDots />
        <SignUp.TallPlant />
        <SignUp.WebLady />
      </SignUp>
    </>
  );
}
