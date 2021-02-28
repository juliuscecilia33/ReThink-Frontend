import React from "react";
import { SignUp2 } from "../components";
import * as ROUTES from "../constants/routes";

export function SignUp2Container() {
  return (
    <>
      <SignUp2>
        <SignUp2.Slogan>
          Sign up <br />
          <span>with us, you'll like it here</span>
        </SignUp2.Slogan>
        <SignUp2.Description>
          What category best describes your business?
        </SignUp2.Description>
        <SignUp2.Select />
        <SignUp2.Description>
          Why do you want to sign up with us?
        </SignUp2.Description>
        <SignUp2.Input />
        <SignUp2.Description>
          What sustainable practices does your company follow?
        </SignUp2.Description>
        <SignUp2.Input />
        <SignUp2.Button to={ROUTES.SIGNUP}>Next</SignUp2.Button>
      </SignUp2>
    </>
  );
}
